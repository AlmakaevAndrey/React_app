import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.mainLayout}>
      <header>header</header>
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Outlet />
          main</main>
        <footer className={styles.footer}>footer</footer>
        React Question Cards Application | {currentYear} <br />
        by Almakaev Andrey
      </div>
    </div>
  );
};
