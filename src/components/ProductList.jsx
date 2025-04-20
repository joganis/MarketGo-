// src/components/ProductList.jsx
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const ProductList = () => {
  const { products, setProducts, filterStore, filterCategory } =
    useContext(AppContext);

  // Filtrar productos según tienda y categoría (si se han establecido filtros)
  const filteredProducts = products.filter((product) => {
    const matchStore = filterStore ? product.store === filterStore : true;
    const matchCategory = filterCategory ? product.category === filterCategory : true;
    return matchStore && matchCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleDelete = (id) => {
    const updatedProducts = products.filter((prod) => prod.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // Actualizar localStorage con cada cambio
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Calcular total de compra
  const total = products.reduce((acc, prod) => acc + prod.price, 0);

  return (
    <div className="card list-card">
      <h2>Historial de Compras</h2>
      {sortedProducts.length === 0 ? (
        <p>No hay productos agregados.</p>
      ) : (
        <ul>
          {sortedProducts.map((product) => (
            <li key={product.id} className="product-item">
              <p>
                <strong>Producto:</strong> {product.name}
              </p>
              <p>
                <strong>Precio:</strong> ${Number(product.price).toFixed(2)}
              </p>
              <p>
                <strong>Fecha:</strong> {product.date}
              </p>
              <p>
                <strong>Tienda:</strong> {product.store}
              </p>
              <p>
                <strong>Categoría:</strong> {product.category}
              </p>
              <button onClick={() => handleDelete(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default ProductList;
