import { createContext } from "react";

const AuthContext = createContext({
  auth: undefined,
  loginin: () => null,
  logout: () => null,
  setReloudUser: () => null,
});

export default AuthContext;
