# 📦 Gestor de Compras

## 📋 Descripción
Esta aplicación es un **gestor de compras** que permite al usuario:
- Iniciar sesión usando Google, Facebook, Apple o correo/contraseña.
- Agregar productos especificando **tienda**, **categoría**, **nombre** y **precio**.
- Ver un **historial de compras** con el total acumulado.
- **Filtrar** los productos por tienda y por categoría.
- Alternar entre **modo claro** y **modo oscuro** con una interfaz armoniosa.

## 🛠️ Herramientas y tecnologías
- **Framework**: React (Create React App)  
- **Enrutamiento**: React Router  
- **Estado global**: Context API (useContext)  
- **Hooks**: useState, useEffect, useContext, useNavigate  
- **Autenticación**: Firebase Authentication (Google, Facebook, Apple, Email/Password)  
- **Persistencia local**: localStorage  
- **Maquetación**: CSS Variables, Flexbox  
- **Iconos**: React Icons (FaGoogle, FaFacebook, FaApple…)  
- **UUID**: uuid (generación de IDs únicas)  

---

## 🚀 Características principales
1. **Pantalla de login** con botones e íconos de proveedores y formulario de correo/contraseña.  
2. **Dashboard** con:
   - **ThemeToggle** para cambiar entre light/dark mode.  
   - **SearchBar** para filtrar por tienda y categoría.  
   - **ProductForm** para capturar nuevos productos.  
   - **ProductList** (historial) con listado, eliminación y cálculo de total.  
3. **Persistencia** de la lista de productos en `localStorage`.  
4. **Navegación protegida**: rutas públicas (/) y privadas (`/dashboard`), con pantalla 404.

---

## ⚙️ Instalación y puesta en marcha

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/tu-usuario/gestor-compras.git
   cd gestor-compras



📖 Uso
Registro / Login

Elige un proveedor (Google, Facebook, Apple) o usa tu correo y contraseña.

Dashboard

Cambia el tema con el botón Cambiar modo.

Filtra productos por tienda o categoría.

Agrega productos desde el formulario; verás que se listan inmediatamente.

Elimina productos haciendo clic en “Eliminar”.

Observa el total de tu compra actualizado al momento.



✨ Mejoras futuras
Autorización de rutas protegidas (redireccionar usuarios no autenticados).

Integrar Firestore para persistencia remota de datos.

Exportar historial a Excel o PDF.

Animaciones con Framer Motion.

