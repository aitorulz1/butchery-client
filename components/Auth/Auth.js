<<<<<<< HEAD
import React, { useState } from "react";
import LoginForm from "../Auth/LoginForm/LoginForm";
import RegisterForm from "../Auth/RegisterForm/RegisterForm";

export default function Auth(props) {
  const [showLogin, setShowLogin] = useState(false);

  console.log(props);
  return showLogin ? <LoginForm /> : <RegisterForm />;
=======
import React, {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth(props) {

    const { closeModal } = props;
    const [ showlogin, setShowLogin ] = useState(false)

    const showLoginForm = () => setShowLogin(true);
    const showRegisterForm = () => setShowLogin(false);

    return  showlogin ? <LoginForm showRegisterForm={showRegisterForm} /> : <RegisterForm showLoginForm={showLoginForm} />;
        
>>>>>>> 24f861a63e5f07ffc76bb849ca165ea478940533
}
