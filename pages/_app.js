import React, { useState, useEffect, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext";
import jwtDecode from "jwt-decode";
import { setToken, getToken } from '../api/token';
import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [relaodUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if(token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id
      });
    } else {
      setAuth(null)
    }
    setReloadUser(false)
  }, [relaodUser])  

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id
    });
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
      setReloadUser,
    }),
    [auth]
  );

    if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
