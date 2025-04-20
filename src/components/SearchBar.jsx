// src/components/SearchBar.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
  const { filterStore, setFilterStore, filterCategory, setFilterCategory } =
    useContext(AppContext);

  return (
    <div className="search-bar">
      <label>
        Filtrar por Tienda:
        <select value={filterStore} onChange={(e) => setFilterStore(e.target.value)}>
          <option value="">Todas</option>
          <option value="Ara">Ara</option>
          <option value="Olimpica">Olimpica</option>
          <option value="Exito">Exito</option>
          <option value="De Uno">De Uno</option>
          <option value="Otros">Otros</option>
        </select>
      </label>
      <label>
        Filtrar por Categoría:
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">Todas</option>
          <option value="Frutas y Verduras">Frutas y Verduras</option>
          <option value="Lácteos">Lácteos</option>
          <option value="Granos">Granos</option>
          <option value="Cárnicos">Cárnicos</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
