import React from 'react'

export default function RegisterForm(props) {

    const { showLoginForm } = props;
    
    return (
        <div>
            <h1>Estamos en el formulario de Registro</h1>
            <button onClick={showLoginForm}>Ir a Login</button>
        </div>
    )
}
