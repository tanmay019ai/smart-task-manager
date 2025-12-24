import { useNavigate } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // later we will also clear JWT
    localStorage.removeItem("token");

    // redirect to login
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between px-6 py-4
      bg-white dark:bg-slate-800 shadow">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-red-500 text-white"
        >
          Logout
        </button>

        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Smart Task Manager
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <ThemeToggle />
    </header>
  );
};

export default Header;
