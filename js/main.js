let nuevaCard = document.getElementById('cards');

function setCards(productos) {
    productos.forEach(shoe => {
        let card = document.createElement("div");
        card.classList = "shoe-card";
        card.innerHTML = `<img class= "shoe-img" src="${shoe.img}">
        <p>${shoe.name}</p>
        <p>${shoe.price}</p>`
        nuevaCard.appendChild(card);
    });
}

setCards(shoes);