// src/pages/DashboardPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";
import { logout } from "../firebase/config";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Encabezado con botón de cierre de sesión y toggle de tema */}
      <header className="header-bar">
        <div className="header-left">
          <ThemeToggle /> 
        </div>
        <div className="header-right">
          <button onClick={handleLogout} className="btn-logout">
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Barra de Búsqueda/Filtros */}
      <div className="search-bar-container">
        <SearchBar />
      </div>

      {/* Contenedor principal con dos columnas */}
      <main className="dashboard-main">
        <div className="left-column">
          <ProductForm />
        </div>

        <div className="right-column">
          <ProductList />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
