git remote add origin https://github.com/RomanForDev/Shop-Cart.git
git branch -M main
git push -u origin main

Modelo de carrito de compras básico y funcional para e-commerce con Javascript vanilla y recursos para notificaciones con toastify. Con variatnes para cambiar el modelo de funcionamiento en algunos aspectos y adaptarse a otro tipos de comercios (principalmente de mayor volúmen de ventas). Funciona con un array de objetos en un js local simulando una base de datos para la muestra de los objetos disponibles y funciones automatizadas para la muestra de las cantidades y el valor. El apartado de estilo fue realizado con SASS y se encuentra importado al styles.scss, separandose cada index. ...

Resta al proyecto:
* Agregar Fetch.
* Toastify.
* Media Querys (hay un overflow en 1366x768).
* Hacer reactivo el grid donde se muestran las cards para adaptarse a la cantidad de ítems y cambiar color de backgroun a las cards.
* Ver si se puede corregir document.location.reload().
* Darle estilo a los botones y mejorar footer.
* Cargarla en GitHub Pages.