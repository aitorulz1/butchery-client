import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";

export default function RegisterForm(props) {
  const { showLoginForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      registerApi(formData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <input
        name="surname"
        type="text"
        placeholder="surname"
        onChange={formik.handleChange}
        error={formik.errors.surname}
      />
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={formik.handleChange}
        error={formik.errors.username}
      />
      <input
        name="email"
        type="mail"
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

      <button type="button">Iniciar Sesión</button>
      <button type="submit">Registrarse</button>
    </form>
  );
}

function initialValues() {
  return {
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    surname: Yup.string().required(true),
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
