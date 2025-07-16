import { createContext, useState } from "react";
import { AUTH_STORAGE } from "../../constance";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const isLogin = JSON.parse(localStorage.getItem(AUTH_STORAGE)) || false;
  const [isAuth, setIsAuth] = useState(isLogin);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}> {children}</AuthContext.Provider>;
};
