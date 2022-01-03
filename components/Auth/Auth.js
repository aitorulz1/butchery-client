import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth(props) {
  const { closeModal, setModalTitle } = props;
  const [showlogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setModalTitle("Inicia Sesión");
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setModalTitle("Regístrate");
    setShowLogin(false);
  };

  return showlogin ? (
    <LoginForm showRegisterForm={showRegisterForm} closeModal={closeModal} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
}
