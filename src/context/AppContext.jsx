// src/context/AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Estados para productos y formulario de productos
  const [products, setProducts] = useState([]);
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  // Estado para el tema: 'light' o 'dark'
  const [theme, setTheme] = useState("light");

  // Estados para filtros de búsqueda
  const [filterStore, setFilterStore] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        nameProduct,
        setNameProduct,
        priceProduct,
        setPriceProduct,
        theme,
        setTheme,
        filterStore,
        setFilterStore,
        filterCategory,
        setFilterCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
