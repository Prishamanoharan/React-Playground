import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Page = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  return (
    <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-6">
      <p className="text-slate-600 dark:text-slate-400 italic">
        Current Theme:{" "}
        <span className="font-bold text-primary-600 uppercase tracking-widest">
          {context.theme}
        </span>
      </p>

      <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-xl text-primary-800 dark:text-primary-300 text-sm">
        <strong>Tip:</strong> Switching themes helps reduce eye strain and saves
        energy on OLED screens.
      </div>
    </div>
  );
};

export default Page;
