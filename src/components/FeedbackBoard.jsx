import React from "react";

const FeedbackBoard = () => {
  const stats = [
    { label: "Total Users", value: "12.4k", color: "bg-blue-500" },
    { label: "Active Projects", value: "84", color: "bg-emerald-500" },
    { label: "Response Rate", value: "98%", color: "bg-amber-500" },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-black text-slate-900 dark:text-white">
        Platform Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <div
              className={`w-10 h-10 ${stat.color} rounded-xl mb-4 opacity-20`}
            />

            <div className="text-3xl font-black dark:text-white mb-1">
              {stat.value}
            </div>

            <div className="text-slate-500 font-medium text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackBoard;
