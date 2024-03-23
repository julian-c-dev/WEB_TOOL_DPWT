// i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  returnObjects: true,
  fallbackLng: "en",
});

export default i18next; // Exporta la instancia de i18next con el nombre correcto
