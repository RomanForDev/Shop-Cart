//Funcion para crear las cards en la interfaz de usuario tomando los elementos de cada objeto en "shoes".

let nuevaCard = document.getElementById('cards');

function setCards(productos) {
    productos.forEach(shoe => {
        const card = document.createElement("div");
        card.classList = "shoe-card";
        card.innerHTML = `<img class= "shoe-img" src="${shoe.img}">
        <h3 id="shoe-name" class="shoe-name" >${shoe.name}</h3>
        <p id="shoe-price" class= "shoe-price">${shoe.price}</p>
        <p id="shoe-id" class= "shoe-id">${shoe.id}</p>
        <button id="add-button" class="cart-button">Agregar</button>`
        nuevaCard.appendChild(card);
        card.getElementsByClassName("cart-button")[0].addEventListener("click", ()=> addToCart(shoe));
    });
}

setCards(shoes);

//Funcion para escribir el HTML con la información del carrito.