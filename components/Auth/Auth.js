import React, {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth(props) {

    const { closeModal } = props;
    const [ showlogin, setShowLogin ] = useState(false)

    const showLoginForm = () => setShowLogin(true);
    const showRegisterForm = () => setShowLogin(false);

    return  showlogin ? <LoginForm showRegisterForm={showRegisterForm} /> : <RegisterForm showLoginForm={showLoginForm} />;
        
}
