import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm(props) {
  const { showRegisterForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        type="text"
        placeholder="email"
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <button type="button" onClick={showRegisterForm}>
        Ir a Registro
      </button>
      <button type="submit">Entrar</button>
      <button type="button">¿Has olvidado la contraseña?</button>
    </form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
