import React, { useState } from "react";

const Overall = () => {
  const [hp, setHp] = useState(296.48);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
      <div className="space-y-8">
        {/* Car Section */}
        <div className="text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-2">
            Vehicle Status
          </h3>

          <div className="text-4xl font-black text-slate-900 dark:text-white">
            {hp.toFixed(2)} HP
          </div>

          <p className="text-slate-500 mb-4">Current Horsepower</p>

          <button
            onClick={() => setHp((prev) => prev + 10)}
            className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold shadow-lg shadow-primary-200 dark:shadow-none transition-all"
          >
            Upgrade Engine
          </button>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700" />

        {/* Counter Section */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-mono font-bold text-slate-900 dark:text-white mb-4">
            {count}
          </div>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="px-8 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-2xl font-bold transition-colors"
          >
            Increase Count
          </button>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700" />

        {/* Name Input */}
        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-500 uppercase">
            Personalize
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
          />

          {name && (
            <p className="text-center text-slate-600 dark:text-slate-400">
              Hello,{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                {name}
              </span>
              !
            </p>
          )}
        </div>

        {/* Quiz Section */}
        <div className="space-y-4 text-center">
          <h4 className="text-lg font-bold dark:text-white">
            What is the color of the sky?
          </h4>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setAnswer("Blue")}
              className="px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              Blue
            </button>

            <button
              onClick={() => setAnswer("Red")}
              className="px-6 py-2 bg-red-500 text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              Red
            </button>
          </div>

          {answer && (
            <p className="text-slate-600 dark:text-slate-400">
              Your answer:{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                {answer}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overall;
