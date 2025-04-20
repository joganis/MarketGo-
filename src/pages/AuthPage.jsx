// src/pages/AuthPage.jsx
import React from "react";
import AuthForm from "../components/AuthForm";
import "../styles/styles.css";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <h1>Aplicación de Gestión de Compras</h1>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
