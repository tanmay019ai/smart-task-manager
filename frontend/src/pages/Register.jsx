import RegisterForm from "../components/auth/RegisterForm";
import ThemeToggle from "../components/common/ThemeToggle";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-slate-100 dark:bg-slate-900 relative">
      
      <ThemeToggle />
      <RegisterForm />
    </div>
  );
};

export default Register;
