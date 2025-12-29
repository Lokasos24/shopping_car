# 🛒 Carrito de compras

## 📄 Descripción
- Proyecto personal para practicar y consolidar conceptos de Front-End, simulando un carrito de compras funcional.
- Permite registrar usuarios, agregar productos al carrito y gestionar la compra de manera interactiva.

---

## ⚙️ Funcionalidades principales
- ✅ Añadir un usuario.
- ✅ Mantener la sesión activa.
- ✅ Cerrar la sesión.
- ✅ Añadir producto al carrito.
- ✅ Sumar/Restar valor total del carrito.
- ⬜ Eliminar productos del carrito.
- ⬜ Comprar productos.

---

## 🚀 Funcionalidades extras
- ⬜ Agregar botón para sacar todo del carrito.
- ⬜ Mejor diseño de la página.
- ⬜ Refactorización del codigo.

---

## 🧠 Objetivos de aprendizaje
- Registrar usuarios y manejar sesiones.
- Mostrar productos desde datos externos.
- Gestionar el carrito de compras y el cálculo del total.
- Mejorar la interacción y experiencia de usuario.

---

## 🛠️ Tecnologías usadas
- HTML.
- CSS.
- JavaScript.

---

## 🚗 Aprendizaje sobre la marcha
1. **Estado central (`state`)**: Contiene todos los usuarios y la sesión activa. Esto asegura que hay una fuente de verdad.
2. **UI pura (`renderUsers`)**: Recibe únicamente el usuario activo o `null` y se encarga solamente de actualizar la interfaz.
3. **Flujo unidireccional desde `main()`**: El `main` actua solo como orquestador, pasando el estado a eventos y a la UI. Esto mantiene un flujo claro.
4. **Eventos y mutaciones controladas**: Funciones como login, logout o registro mutan el estado y luego disparan la UI para que se actualize.
5. **Componentes reutilizables**: Componentes que se llaman cuando se necesitan hechos a mano con propiedades internas que pueden ser llamadas externamente.

Mientras avanzo con el proyecto, estoy aprendiendo por qué **es mejor tener un solo estado cambiante**, cómo evitar inconsistencias con flags dispersos y cómo centralizar la lógica de sesión.

---

## ▶️ Como ejecutar el proyecto
1. Clona el repositorio: git clone "https://github.com/Lokasos24/shopping_car.git".
2. Abre index.html en tu navegador.

---

## 📌 Créditos
- API de productos: Fake Store API.
- Proyecto realizado como práctica personal para consolidar conocimientos Front-End.
