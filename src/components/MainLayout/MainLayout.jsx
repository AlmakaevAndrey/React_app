import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Header } from "../Header";
import { ToastContainer } from "react-toastify";
import { Loader } from "../Loader";
import { Suspense } from "react";

export const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.mainLayout}>
        <Header />
        <div className={styles.mainWrapper}>
          <main className={styles.main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <footer className={styles.footer}>
            React Question Cards Application | {currentYear} <br />
            by Almakaev Andrey
          </footer>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
