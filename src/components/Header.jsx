import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors"
          >
            Features
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors"
          >
            About
          </Link>
        </nav>

        <button className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
