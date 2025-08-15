let nuevaCard = document.getElementById('cards');

function setCards(productos) {
    productos.forEach(shoe => {
        let card = document.createElement("div");
        card.classList = "shoe-card";
        card.innerHTML = `<img class= "shoe-img" src="${shoe.img}">
        <h3 id="shoe-name" class="shoe-name" >${shoe.name}</h3>
        <p id="shoe-price" class= "shoe-price">${shoe.price}</p>
        <button id="add-button" class="cart-button">Agregar</button>`
        nuevaCard.appendChild(card);
    });
}

setCards(shoes);