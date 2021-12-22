import React, { useState } from "react";
import LoginForm from "../Auth/LoginForm/LoginForm";
import RegisterForm from "../Auth/RegisterForm/RegisterForm";

export default function Auth(props) {
  const [showLogin, setShowLogin] = useState(false);

  console.log(props);
  return showLogin ? <LoginForm /> : <RegisterForm />;
}
