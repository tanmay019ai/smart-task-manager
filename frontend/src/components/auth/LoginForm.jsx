import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // 👈 ADD THIS

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("LOGIN DATA:", form);

    // ✅ TEMPORARY: direct route to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-md p-8 rounded-xl shadow-lg
      bg-white dark:bg-slate-800">

      <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-2">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg
          bg-slate-100 dark:bg-slate-700
          text-slate-900 dark:text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg
          bg-slate-100 dark:bg-slate-700
          text-slate-900 dark:text-white"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold
          bg-green-500 hover:bg-green-600 text-black"
        >
          Login
        </button>
      </form>

      <p className="text-center text-slate-600 dark:text-slate-400 mt-4">
        Don’t have an account?{" "}
        <Link to="/register" className="text-green-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
