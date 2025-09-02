git remote add origin https://github.com/RomanForDev/Shop-Cart.git
git branch -M main
git push -u origin main

Modelo de carrito de compras básico y funcional para e-commerce con Javascript vanilla y recursos para notificaciones con toastify. Con variatnes para cambiar el modelo de funcionamiento en algunos aspectos y adaptarse a otro tipos de comercios (principalmente de mayor volúmen de ventas). Funciona con un array de objetos en un js local simulando una base de datos para la muestra de los objetos disponibles como también con un json local para utilizarlo mediante fetch, además de las funciones automatizadas para la muestra de las cantidades, el valor y su actualización dinámica. También contará con un reinicio del carrito como también una confirmación de compra. En todas estas funciones se generará una alerta que se mostrará en pantalla. El apartado de estilo fue realizado con SASS, con un grid reactivo a la cantidad de elementos de la base de datos (sin bootstrap) y se encuentra importado al styles.scss, separandose cada index como cada partial .scss. ...

Resta al proyecto:
* Corregir estilo de la notificación y el tema del footer.
* Estilos de botones de confirmar, reiniciar y volver en cart.html
* Media Querys (hay un overflow). mobile (320-480px), tablets (481-768px), portátiles (769-1024px) y escritorios (1025px+)