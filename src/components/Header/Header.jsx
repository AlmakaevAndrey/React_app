import { useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";
import { AUTH_STORAGE } from "../../constance";
import cls from "./Header.module.css";
import { ThemeToggler } from "../../features/ThemeToggler";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();

  const loginHandler = () => {
    localStorage.setItem(AUTH_STORAGE, !isAuth);
    setIsAuth(!isAuth);
  };

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCard</span>
      </p>

      <div className={cls.headerButtons}>
        <ThemeToggler />

        {isAuth && (
          <Button isActive={true} onClick={() => navigate("/addquestion")}>
            Add
          </Button>
        )}

        <Button onClick={loginHandler} isActive={!isAuth}>
          {isAuth ? "Logout" : "Login"}
        </Button>
      </div>
    </header>
  );
};
