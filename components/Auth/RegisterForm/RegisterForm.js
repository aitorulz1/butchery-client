<<<<<<< HEAD
import React from "react";

export default function RegisterForm() {
  return <div>Estas en Register</div>;
=======
import React from 'react'

export default function RegisterForm(props) {

    const { showLoginForm } = props;
    
    return (
        <div>
            <h1>Estamos en el formulario de Registro</h1>
            <button onClick={showLoginForm}>Ir a Login</button>
        </div>
    )
>>>>>>> 24f861a63e5f07ffc76bb849ca165ea478940533
}
