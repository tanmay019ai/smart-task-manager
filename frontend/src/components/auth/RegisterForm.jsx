import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // 👈 ADD THIS

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("REGISTER DATA:", form);

    // ✅ TEMPORARY: after register → login page
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md p-8 rounded-xl shadow-lg
      bg-white dark:bg-slate-800">

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-6">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg
          bg-slate-100 dark:bg-slate-700
          text-slate-900 dark:text-white
          border border-slate-300 dark:border-slate-600
          focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg
          bg-slate-100 dark:bg-slate-700
          text-slate-900 dark:text-white
          border border-slate-300 dark:border-slate-600
          focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 chars)"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg
          bg-slate-100 dark:bg-slate-700
          text-slate-900 dark:text-white
          border border-slate-300 dark:border-slate-600
          focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          disabled={!form.name || !form.email || !form.password}
          className="w-full py-3 rounded-lg font-semibold
          bg-green-500 hover:bg-green-600 text-black
          disabled:opacity-50"
        >
          Register
        </button>
      </form>

      <p className="text-center text-slate-600 dark:text-slate-400 mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-green-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
