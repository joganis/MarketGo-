// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider,  AppContext } from "./context/AppContext";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboarPage";
import NotFound from "./pages/NotFound";
import "./styles/styles.css";

function App() {
  // Para el dark/light mode, podemos establecer una clase al contenedor principal
  const { theme } = useContext(AppContext) || { theme: "light" };

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

// Se envuelve la aplicación en el provider para compartir el contexto
export default () => (
  <AppProvider>
    <App />
  </AppProvider>
);
