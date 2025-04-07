import cls from "./ThemeToggler.module.css";
import { useTheme } from "../../hooks/useTheme";
import { THEME_STORAGE } from "../../constance";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeHandler = (e) => {
    const isChecked = e.target.checked === true;
    const updatedTheme = isChecked ? "dark" : "light";

    setTheme(updatedTheme);

    isChecked ? document.body.classList.add("darkLayout") : document.body.classList.remove("darkLayout");

    localStorage.setItem(THEME_STORAGE, updatedTheme);
  };
  return (
    <label className={cls.ui_switch}>
      <input type="checkbox" onChange={onChangeHandler} checked={theme === "dark"}></input>
      <div className={cls.slider}>
        <div className={cls.circle}></div>
      </div>
    </label>
  );
};
