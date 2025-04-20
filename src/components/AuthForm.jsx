// src/components/AuthForm.jsx
import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithApple,
  signInWithEmail,
} from "../firebase/config";

const AuthForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleProviderLogin = async (providerFn) => {
    await providerFn();
    navigate("/dashboard"); // Redirigir al dashboard tras iniciar sesión
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    await signInWithEmail(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="auth-card">
      <h2>Iniciar Sesión</h2>
      <div className="auth-buttons">
        <button onClick={() => handleProviderLogin(signInWithGoogle)}className="google">
          <FaGoogle />
       Iniciar con Google
        </button>
        <button onClick={() => handleProviderLogin(signInWithFacebook)} className="facebook">
          <FaFacebookF />
          Iniciar con Facebook
        </button>
        <button onClick={() => handleProviderLogin(signInWithApple)} className="apple">
          <FaApple />
          Iniciar con Apple
        </button>
      </div>
      <div className="auth-or">
        <span>o</span>
      </div>
      <form onSubmit={handleEmailLogin}>
        <div>
          <input
            type="text"
            placeholder="Correo o Móvil"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default AuthForm;
