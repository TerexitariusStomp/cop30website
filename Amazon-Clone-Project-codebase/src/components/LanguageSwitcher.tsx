"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-[#1a3333]/80 border border-white/10 rounded-full px-2 py-1">
      <button
        className={`px-3 py-1 text-sm rounded-full ${
          language === "en" ? "bg-primary text-primary-foreground" : "text-text-secondary hover:text-text-primary"
        }`}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        {t("lang.en")}
      </button>
      <button
        className={`px-3 py-1 text-sm rounded-full ${
          language === "pt" ? "bg-primary text-primary-foreground" : "text-text-secondary hover:text-text-primary"
        }`}
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
      >
        {t("lang.pt")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

