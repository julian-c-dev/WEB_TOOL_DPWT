//! Dashboard.jsx

//? React Imports
import React, { useState } from "react";

//?  Component Imports
import SelectBg from "./SelectBg";
import SelectShape from "./SelectShape";
import SelectResolution from "./SelectResolution";
import SelectDivision from "./SelectDivision";
import { TileLabelInputs, TileLabelSettings, FONT_MAP, LABEL_COLOR_MAP, PILL_BG_MAP } from "./TileLabels";
import Preview from "./Preview";

//?  Styling Imports
import styles from "../style";

import "reactjs-popup/dist/index.css";
import "./css/Popup.css";
import "./css/Dashboard.css";

//?  Resource Imports
import { useTranslation } from "react-i18next";
import { arrow_right } from "../assets";
import { saveAs } from "file-saver";
import { LuDownload } from "react-icons/lu";
import Popup from "reactjs-popup";

//! COMPONENT Dashboard:
const Dashboard = ({ isNotDarkMode, isOSChecked }) => {
  //*  Translations
  const { t } = useTranslation();
  const preview = t("preview");
  const resetButtonText = t("button.reset");
  const generateButtonText = t("button.generate");
  const popupTitle = t("popup.title");
  const popupContent1 = t("popup.content1");
  const popupContent2 = t("popup.content2");
  const popupContent3 = t("popup.content3");
  const startAGain = t("startAGain");

  //*  States
  const [selectedBg, setSelectedBg] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(4);
  const [selectedResolution, setSelectedResolution] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tileTitles, setTileTitles] = useState([]);
  const [labelFont, setLabelFont] = useState("sf");
  const [labelSize, setLabelSize] = useState("md");
  const [pillBg, setPillBg] = useState("dark");

  //*  Logic
  const handleSelectBg = (bg) => setSelectedBg(bg);
  const handleSelectShape = (shape) => setSelectedShape(shape);

  const handleSelectDivision = (division) => {
    setSelectedDivision(division);
    setTileTitles([]);
  };

  const handleTitleChange = (index, value) => {
    setTileTitles((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSelectResolution = (resolution) => setSelectedResolution(resolution);

  const handleReset = () => {
    setSelectedBg(null);
    setSelectedShape(null);
    setSelectedDivision(4);
    setSelectedResolution(null);
    setTileTitles([]);
    setLabelFont("sf");
    setLabelSize("md");
    setPillBg("dark");
  };

  const handleGenerate = () => {
    let bgName;
    switch (selectedBg) {
      case "#000410":  bgName = "bg1";  break;
      case "#3533cd":  bgName = "bg2";  break;
      case "#800080":  bgName = "bg3";  break;
      case "#AE3D6C":  bgName = "bg4";  break;
      case "#466A2D":  bgName = "bg5";  break;
      case "#302B30":  bgName = "bg6";  break;
      case "linear-gradient(to bottom, #000000 0%, #3533cd 100%)":          bgName = "bg7";  break;
      case "linear-gradient(to bottom, #0019ff 0%, #ae3d6c 50%, #ff5c00 100%)": bgName = "bg8";  break;
      case "linear-gradient(to bottom, #FF3131 0%, #FF914D 100%)":         bgName = "bg9";  break;
      case "linear-gradient(to bottom, #0D8D4C 0%, #DFA21A 100%)":         bgName = "bg10"; break;
      default: bgName = "unknown"; break;
    }

    const fileName   = `DPWT_${bgName}_${selectedDivision}${selectedShape[0]}_${selectedResolution}.png`;
    const downloadUrl = `/downloads/${fileName}`;
    const hasTitles  = tileTitles.some((t) => t && t.trim() !== "");
    const needsCanvas = hasTitles;

    fetch(downloadUrl)
      .then((r) => r.blob())
      .then((blob) => {
        if (!needsCanvas) {
          saveAs(blob, fileName);
          return;
        }

        //*  Canvas: compose final image
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width  = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");

          // 1. Draw base PNG
          ctx.drawImage(img, 0, 0);

          // 2. Grid geometry
          const cols  = [2, 4].includes(selectedDivision) ? 2 : selectedDivision === 6 ? 3 : 4;
          const rows  = selectedDivision === 2 ? 1 : 2;
          const cellW = canvas.width  / cols;
          const cellH = canvas.height / rows;

          // Helper: pixel-level brightness of a point
          const px = (d, x, y) => (d[(y * canvas.width + x) * 4] + d[(y * canvas.width + x) * 4 + 1] + d[(y * canvas.width + x) * 4 + 2]) / 3;

          // Helper: local background brightness from cell corners (handles gradients)
          const cellBg = (d, cX, cY, cW, cH) => {
            const corners = [[cX+2,cY+2],[cX+cW-3,cY+2],[cX+2,cY+cH-3],[cX+cW-3,cY+cH-3]];
            return corners.reduce((s, [x,y]) => s + px(d, x, y), 0) / 4;
          };

          // 3. Pre-detect tile top per cell BEFORE any darkening
          // 3. Detect tile top edge per cell (Y only — tiles are centered in cells so X = (col+0.5)*cellW)
          const tileTops = [];
          if (hasTitles && selectedShape === "tiles") {
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = imgData.data;

            for (let row = 0; row < rows; row++) {
              for (let col = 0; col < cols; col++) {
                const cX = Math.round(col * cellW);
                const cY = Math.round(row * cellH);
                const cW = Math.round((col + 1) * cellW) - cX;
                const cH = Math.round((row + 1) * cellH) - cY;
                const bgBright = cellBg(d, cX, cY, cW, cH);
                const vThresh  = Math.min(bgBright + 18, 240);
                const midX     = cX + Math.round(cW / 2);

                let tileTop = cY + Math.round(cH * 0.05);
                for (let y = cY; y < cY + cH; y++) {
                  if (px(d, midX, y) > vThresh) { tileTop = y; break; }
                }
                tileTops.push(tileTop);
              }
            }
          }

          // 4. Draw labels
          if (hasTitles) {
            const sizeMap = {
              sm: Math.max(14, Math.round(cellH * 0.030)),
              md: Math.max(18, Math.round(cellH * 0.042)),
              lg: Math.max(24, Math.round(cellH * 0.058)),
            };
            const fontSize = sizeMap[labelSize] || sizeMap.md;
            const innerPad = Math.round(cellH * 0.03);

            ctx.textAlign    = "center";
            ctx.textBaseline = "top";
            ctx.font         = `bold ${fontSize}px ${FONT_MAP[labelFont] || FONT_MAP.sans}`;

            const pillPadX = Math.round(fontSize * 0.35);
            const pillPadY = Math.round(fontSize * 0.18);
            const pillR    = Math.round(fontSize * 0.28);

            tileTitles.forEach((title, i) => {
              if (!title || !title.trim()) return;
              const col  = i % cols;
              const row  = Math.floor(i / cols);
              const cY   = Math.round(row * cellH);
              const cH   = Math.round((row + 1) * cellH) - cY;

              let textY;
              if (selectedShape === "tiles" && tileTops[i] != null) {
                textY = tileTops[i] + innerPad;
              } else {
                // For lines row 2, push the label further down to clear the center line
                const lineOffset = row === 0 ? 0.04 : 0.10;
                textY = cY + Math.round(cH * lineOffset);
              }

              // X: tiles are centered in their cell, so geometric formula is exact
              const textX = Math.round((col + 0.5) * cellW);

              // Measure text to size the pill
              ctx.shadowColor = "transparent";
              ctx.shadowBlur  = 0;
              const textW = ctx.measureText(title.trim()).width;
              const pillX = textX - textW / 2 - pillPadX;
              const pillY = textY - pillPadY;
              const pillW = textW + pillPadX * 2;
              const pillH = fontSize + pillPadY * 2;

              // Draw pill background
              const pillBgColor = PILL_BG_MAP[pillBg] || PILL_BG_MAP.dark;
              if (pillBgColor !== "transparent") {
                ctx.fillStyle = pillBgColor;
                ctx.beginPath();
                ctx.roundRect(pillX, pillY, pillW, pillH, pillR);
                ctx.fill();
              }

              // Draw text on top
              ctx.fillStyle   = LABEL_COLOR_MAP.faded;
              ctx.shadowColor = "rgba(0,0,0,0.45)";
              ctx.shadowBlur  = 6;
              ctx.fillText(title.trim(), textX, textY);
              ctx.shadowBlur  = 0;
            });
          }

          // 6. Export
          canvas.toBlob((out) => saveAs(out, fileName), "image/png");
          URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(blob);
      })
      .catch((error) =>
        console.error("Error when trying to download the file.", error)
      );
  };

  const isGenerateDisabled = selectedResolution === null;

  return (
    <section
      className={` ${styles.flexCenter} py-20 flex-col gap-4 ${
        isNotDarkMode ? "bg-[#C4DFE6]" : "bg-black-gradient-2"
      }  box-shadow`}
    >
      <div
        className={`w-full ${styles.flexCenter} flex-col md:flex-row flex-nowrap gap-4`}
      >
        <div
          className={`min-w-[200px] xl:w-1/4 ${styles.flexCenter} relative flex-col flex-nowrap gap-4 `}
        >
          <div>
            {selectedShape ? (
              ""
            ) : (
              <div>
                <p
                  className={`absolute -top-12 -left-4 xss:-left-8 ss:-left-10 w-16 z-10 ${
                    isNotDarkMode ? "text-main" : "text-white"
                  } text-2xl font-mono neon`}
                >
                  {preview}
                </p>
                <img
                  className="absolute -top-6 left-0 w-16 z-10"
                  src={arrow_right}
                />
              </div>
            )}

            <Preview
              selectedBg={selectedBg}
              selectedShape={selectedShape}
              selectedDivision={selectedDivision}
              isOSChecked={isOSChecked}
              tileTitles={tileTitles}
              labelFont={labelFont}
              labelSize={labelSize}
              pillBg={pillBg}
            />
          </div>
          <div className={`${styles.flexCenter} gap-4`}>
            <button
              type="button"
              className={` mt-8 py-4 px-6 font-poppins font-medium text-[18px] outline-none rounded-[10px] w-[127.995px]
            ${
              selectedBg !== null ? styles.normalButton : styles.disableButton
            } `}
              onClick={handleReset}
            >
              {resetButtonText}
            </button>

            <Popup
              trigger={
                <button
                  onChange={handleGenerate}
                  type="button"
                  className={`mt-8 py-4 px-6 font-poppins font-medium text-[18px] outline-none rounded-[10px] w-[127.995px]
                  ${
                    isGenerateDisabled
                      ? styles.disableButton
                      : ` ${
                          isNotDarkMode ? styles.normalButton : "glowing-btn"
                        } allow_button cursor-pointer`
                  } `}
                  disabled={isGenerateDisabled}
                >
                  <span
                    className={`${
                      isGenerateDisabled
                        ? ""
                        : `${isNotDarkMode ? "" : "glowing-txt"}`
                    }`}
                  >
                    {generateButtonText}
                  </span>
                </button>
              }
              modal
              open={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
                handleReset();
              }}
              onOpen={handleGenerate}
            >
              {(close) => (
                <div className="modal btn">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> {popupTitle} </div>
                  <div className="content">
                    <br />
                    <div className="flex flex-col gap-2 md:flex-row justify-center items-center">
                      <strong>{popupContent1}</strong> <LuDownload />
                    </div>
                    <br />
                    {popupContent2}
                    <br />
                    {popupContent3}
                    <br />
                  </div>
                  <div className="actions">
                    <button
                      className={`mt-8 py-4 px-6 font-poppins font-medium text-[18px] outline-none rounded-[10px] w-[] ${styles.normalButton}`}
                      onClick={() => { close(); }}
                    >
                      {startAGain}
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>

        <div
          className={`min-w-full sm:min-w-[647px] w-1/2 ${styles.flexCenter} sm:flex-row flex-wrap gap-4`}
        >
          <SelectBg onSelectBg={handleSelectBg} />

          <SelectShape
            onSelectShape={handleSelectShape}
            hasSelectedBg={selectedBg !== null}
            isNotDarkMode={isNotDarkMode}
          />

          <SelectDivision
            onSelectDivision={handleSelectDivision}
            hasSelectedShape={selectedShape !== null}
            isNotDarkMode={isNotDarkMode}
          />

          {/* Always visible, disabled until shape chosen */}
          <TileLabelInputs
            tileTitles={tileTitles}
            onTitleChange={handleTitleChange}
            selectedDivision={selectedDivision}
            isNotDarkMode={isNotDarkMode}
            disabled={!selectedShape}
          />

          {/* Always visible, disabled until shape chosen */}
          <TileLabelSettings
            isNotDarkMode={isNotDarkMode}
            labelFont={labelFont}
            onFontChange={setLabelFont}
            labelSize={labelSize}
            onSizeChange={setLabelSize}
            pillBg={pillBg}
            onPillBgChange={setPillBg}
            disabled={!selectedShape}
          />

          {/* Resolution last */}
          <SelectResolution
            onSelectResolution={handleSelectResolution}
            hasSelectedShape={selectedShape !== null}
            selectedResolution={selectedResolution}
            isNotDarkMode={isNotDarkMode}
          />
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <Popup onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Dashboard;
