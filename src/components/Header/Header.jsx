import { useNavigate } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";
import { Button } from "../Button";
import cls from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCard</span>
      </p>
      <div className={cls.headerButtons}>
        <Button isActive={true} onClick={() => navigate("/addquestion")}>
          Add
        </Button>
        <Button>LogIn</Button>
      </div>
    </header>
  );
};
