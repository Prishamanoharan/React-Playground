import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered: ${formData.name}`);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 h-full">
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-500 uppercase ml-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-500 uppercase ml-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            required
            className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-500 uppercase ml-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors mt-4"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-slate-500">
          By signing up, you agree to our{" "}
          <a
            href="#"
            className="text-primary-600 font-bold hover:underline"
          >
            Terms of Service
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default FormValidation;
