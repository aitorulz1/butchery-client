<<<<<<< HEAD
import React from "react";

export default function LoginForm() {
  return <div>Estamos en Loginnnn</div>;
=======
import React from 'react'

export default function LoginForm(props) {

    const { showRegisterForm } = props;

    return (
        <div>
            <h1>Estamos en el formulario de Login</h1>
            <button onClick={showRegisterForm}>Ir a Registro</button>
        </div>
    )
>>>>>>> 24f861a63e5f07ffc76bb849ca165ea478940533
}
