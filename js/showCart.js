// Funcion para escribir el HTML con la información del carrito.
// const cart = [];
const cartView = document.getElementById('cards-cart');

const memory = JSON.parse(localStorage.getItem("products"));

function writeCart(arr) {
    if(!arr) {
        console.log("No hay productos en el carrito");
    }else {
        arr.forEach(item => {
            const itemView = document.createElement("div");
            itemView.classList = "item";
            itemView.innerHTML = `<p>${item.name}, ${item.price}, x${item.cantidad}</p>
            <button id="del-button" class="del-button">Quitar</button>`;
            cartView.appendChild(itemView);
            cartView.getElementsByClassName("del-button")[0].addEventListener("click", ()=> console.log('Elemento quitado del carrito!'));
    })}
}

writeCart(memory);

////////////////////////////////////////////

// const nuevaCard = document.getElementById("cards-cart");

// function showCards() {
//     const products = JSON.parse(localStorage.getItem("products"));
//     if(products && products.length > 0){
//     products.forEach(producto => {
//         const card = document.createElement("div");
//         card.classList = "shoe-card";
//         card.innerHTML = `
//         <img class= "shoe-img" src=".${producto.img}">
//         <h3 id="shoe-name" class="shoe-name" >${producto.name}</h3>
//         <p id="shoe-price" class= "shoe-price">${producto.price}</p>
//         <p id="shoe-id" class= "shoe-id">${producto.id}</p>
//         <button id="add-button" class="cart-button">Agregar</button>
//         `
//         nuevaCard.appendChild(card);
//         card.getElementsByClassName("cart-button")[0].addEventListener("click", ()=> addToCart(shoe));
//     });
// }}

// showCards();