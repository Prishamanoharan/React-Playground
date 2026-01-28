import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language, setLanguage } = context;

  const langs = [
    { id: "en", label: "English" },
    { id: "ta", label: "தமிழ்" },
    { id: "hi", label: "हिन्दी" },
    { id: "ml", label: "മലയാളം" },
  ];

  return (
    <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
      {langs.map((l) => (
        <button
          key={l.id}
          onClick={() => setLanguage(l.id)}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            language === l.id
              ? "bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-white"
              : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
