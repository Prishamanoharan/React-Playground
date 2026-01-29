
import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Overall from './components/Counter';
import Posts from './components/Fetch';
import FeedbackBoard from './components/FeedbackBoard';
import FormValidation from './components/Form';
import Greeting from './components/Greeting';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import Page from './components/page';
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';



function App() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");


useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);


  return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <HashRouter>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
          }`}
        >
          <Header />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-24">
            {/* HERO */}
            <section className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                Welcome to{" "}
                <span className="text-primary-600">Modern App</span>
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-500">
                A sophisticated React dashboard designed with high-performance
                components and seamless user experience.
              </p>
            </section>

            {/* DASHBOARD CARDS */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* LEFT CARD */}
              <div className="space-y-10">
                <Overall />
              </div>

              {/* RIGHT CARD */}
              <div className="space-y-10">
                <FormValidation />
              </div>
            </section>

            {/* SETTINGS & CONTEXT */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-sm space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-black">Settings & Context</h2>
                  <p className="text-slate-500">
                    Manage global preferences below
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </div>
              </div>

              <Greeting />
              <Page />
            </section>

            {/* PLATFORM INSIGHTS */}
            <section className="space-y-10">
              <FeedbackBoard />
            </section>

            {/* RECENT POSTS */}
            <section className="space-y-10">
              <Posts />
            </section>

            {/* FOOTER */}
            <footer className="pt-16 text-center text-sm text-slate-400">
              © 2024 Modern React Dashboard. Built with Speed and Style.
            </footer>
          </main>
        </div>
      </HashRouter>
    </LanguageContext.Provider>
  </ThemeContext.Provider>
);

}

export default App;
