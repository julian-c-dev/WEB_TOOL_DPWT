//! Dashboard.jsx

//? React Imports
import React, { useState } from "react";

//?  Component Imports
import SelectBg from "./SelectBg";
import SelectShape from "./SelectShape";
import SelectResolution from "./SelectResolution";
import SelectDivision from "./SelectDivision";
import TileLabels from "./TileLabels";
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

  //*  Logic
  const handleSelectBg = (bg) => {
    setSelectedBg(bg);
  };

  const handleSelectShape = (shape) => {
    setSelectedShape(shape);
  };

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

  const handleSelectResolution = (resolution) => {
    setSelectedResolution(resolution);
  };

  const handleReset = () => {
    setSelectedBg(null);
    setSelectedShape(null);
    setSelectedDivision(4);
    setSelectedResolution(null);
    setTileTitles([]);
  };

  const handleGenerate = () => {
    let bgName;

    switch (selectedBg) {
      case "#000410":
        bgName = "bg1";
        break;
      case "#3533cd":
        bgName = "bg2";
        break;
      case "#800080":
        bgName = "bg3";
        break;
      case "#AE3D6C":
        bgName = "bg4";
        break;
      case "#466A2D":
        bgName = "bg5";
        break;
      case "#302B30":
        bgName = "bg6";
        break;
      case "linear-gradient(to bottom, #000000 0%, #3533cd 100%)":
        bgName = "bg7";
        break;
      case "linear-gradient(to bottom, #0019ff 0%, #ae3d6c 50%, #ff5c00 100%)":
        bgName = "bg8";
        break;
      case "linear-gradient(to bottom, #FF3131 0%, #FF914D 100%)":
        bgName = "bg9";
        break;
      case "linear-gradient(to bottom, #0D8D4C 0%, #DFA21A 100%)":
        bgName = "bg10";
        break;
      default:
        bgName = "unknown";
        break;
    }

    //*  Generate the url to download
    const fileName = `DPWT_${bgName}_${selectedDivision}${selectedShape[0]}_${selectedResolution}.png`;
    const downloadUrl = `/downloads/${fileName}`;

    const hasTitles = tileTitles.some((t) => t && t.trim() !== "");

    fetch(downloadUrl)
      .then((response) => response.blob())
      .then((blob) => {
        if (!hasTitles) {
          saveAs(blob, fileName);
          return;
        }

        //*  Canvas: overlay titles on top of the PNG
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");

          ctx.drawImage(img, 0, 0);

          const cols =
            selectedDivision === 2 || selectedDivision === 4
              ? 2
              : selectedDivision === 6
              ? 3
              : 4;
          const rows = selectedDivision / cols;
          const cellW = canvas.width / cols;
          const cellH = canvas.height / rows;
          const fontSize = Math.max(32, Math.round(cellH * 0.07));

          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = `bold ${fontSize}px Poppins, Arial, sans-serif`;
          ctx.fillStyle = "rgba(255,255,255,0.90)";
          ctx.shadowColor = "rgba(0,0,0,0.6)";
          ctx.shadowBlur = 10;

          tileTitles.forEach((title, i) => {
            if (!title || !title.trim()) return;
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = (col + 0.5) * cellW;
            const y = (row + 0.5) * cellH;
            ctx.fillText(title.trim(), x, y);
          });

          canvas.toBlob(
            (outputBlob) => saveAs(outputBlob, fileName),
            "image/png"
          );
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
                      onClick={() => {
                        close();
                      }}
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
          <SelectResolution
            onSelectResolution={handleSelectResolution}
            hasSelectedShape={selectedShape !== null}
            selectedResolution={selectedResolution}
            isNotDarkMode={isNotDarkMode}
          />
          {selectedShape === "tiles" && (
            <TileLabels
              tileTitles={tileTitles}
              onTitleChange={handleTitleChange}
              selectedDivision={selectedDivision}
              isNotDarkMode={isNotDarkMode}
            />
          )}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && <Popup onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Dashboard;
