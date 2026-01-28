import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Greeting = () => {
  const context = useContext(LanguageContext);
  if (!context) return null;

  const { language } = context;

  const greetings = {
    en: "Hello, User!",
    ta: "வணக்கம், பயனர்!",
    hi: "नमस्ते, उपयोगकर्ता!",
    ml: "ഹലോ, ഉപയോക്താവ്!",
  };

  return (
    <div className="mb-4">
      <h2 className="text-4xl font-black text-slate-900 dark:text-white">
        {greetings[language]}
      </h2>
      <p className="text-slate-500 mt-2">
        Personalized experience active.
      </p>
    </div>
  );
};

export default Greeting;
