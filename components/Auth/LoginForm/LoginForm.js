import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm(props) {
  const { showRegisterForm, closeModal } = props;
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);
      if (response?.jwt) {
        login(response.jwt);
        closeModal();
      } else {
        console.log("Login Error");
      }
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="identifier"
        type="mail"
        placeholder="email"
        onChange={formik.handleChange}
        error={formik.errors.identifier}
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
      <Button type="submit">Entrar</Button>
      <button type="button">¿Has olvidado la contraseña?</button>
    </form>
  );
}

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
