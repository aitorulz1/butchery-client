import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from "../../../api/user";

export default function RegisterForm(props) {
  const { showLoginForm } = props;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await registerApi(formData);
      if (response?.jwt) {
        showLoginForm();
      } else {
        console.log("Error al Registrar el usuario");
      }
      setLoading(false);
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

      <button type="button" onClick={showLoginForm}>
        Iniciar Sesión
      </button>
      <Button type="submit" loading={loading}>
        Registrarse
      </Button>
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
