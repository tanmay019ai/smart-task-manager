import LoginForm from "../components/auth/LoginForm";
import ThemeToggle from "../components/common/ThemeToggle";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-slate-100 dark:bg-slate-900 relative">
      
      <ThemeToggle />
      <LoginForm />
    </div>
  );
};

export default Login;
