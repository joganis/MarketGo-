// src/components/ProductForm.jsx
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const ProductForm = () => {
  const {
    nameProduct,
    setNameProduct,
    priceProduct,
    setPriceProduct,
    products,
    setProducts,
  } = useContext(AppContext);

  // Estados locales para tienda y categoría
  const [store, setStore] = useState("");
  const [category, setCategory] = useState("");

  // Función para obtener la fecha actual
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Validar campos
    if (
      nameProduct.trim() === "" ||
      isNaN(priceProduct) ||
      priceProduct <= 0 ||
      store === "" ||
      category === ""
    ) {
      return alert("Todos los campos son obligatorios");
    }

    const newProduct = {
      id: uuidv4(),
      name: nameProduct,
      price: Number(priceProduct),
      date: getCurrentDate(),
      store,
      category,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Limpiar campos
    setNameProduct("");
    setPriceProduct("");
    setStore("");
    setCategory("");
  };

  // Recuperar productos guardados en localStorage al montar el componente
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, [setProducts]);

  return (
    <div className="card form-card">
      <form onSubmit={handleAddProduct}>
        <h2>Agregar Producto</h2>
        <label>
          Tienda:
          <select value={store} onChange={(e) => setStore(e.target.value)}>
            <option value="">Selecciona tienda</option>
            <option value="Ara">Ara</option>
            <option value="Olimpica">Olimpica</option>
            <option value="Exito">Exito</option>
            <option value="De Uno">De Uno</option>
            <option value="Otros">Otros</option>
          </select>
        </label>

        <label>
          Categoría:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecciona categoría</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Granos">Granos</option>
            <option value="Cárnicos">Cárnicos</option>
          </select>
        </label>

        <label>
          Producto:
          <input
            type="text"
            placeholder="Nombre del producto"
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </label>

        <label>
          Precio:
          <input
            type="number"
            placeholder="Precio"
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
        </label>

        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default ProductForm;
