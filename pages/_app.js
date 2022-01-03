import React, { useState, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext";
import jwtDecode from "jwt-decode";

import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const login = (token) => {
    console.log("Estamos en APP js");
    console.log(token);
    // setAuth({});
  };

  const authData = useMemo(
    () => ({
      auth: {
        name: "Aitor",
        email: "aitorulz1@gmail.com",
      },
      login,
      logout: () => null,
      setReloadUser: () => null,
    }),
    []
  );
  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
