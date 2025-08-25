
//Funcion para crear las cards en la interfaz de usuario tomando los elementos de cada objeto en "shoes".

const callData= async()=> {
    let call = await fetch('./data/shoes.json');
    let data = await call.json();
    // console.log(data);
    const nuevaCard = document.getElementById('cards');
    data.forEach(shoe => {
        const card = document.createElement("div");
        card.classList = "shoe-card";
        card.innerHTML = `<img class= "shoe-img" src="${shoe.img}">
        <h3 id="shoe-name" class="shoe-name" >${shoe.name}</h3>
        <p id="shoe-price" class= "shoe-price">$${shoe.price}</p>
        <button id="add-button" class="cart-button">Agregar</button>`
        nuevaCard.appendChild(card);
        card.getElementsByClassName("cart-button")[0].addEventListener("click", ()=> addToCart(shoe)); //Acá va toastify.
    })
}

callData();

//Funcion que hace el llamado desde el array de objetos en shoes.js;

// const nuevaCard = document.getElementById('cards');

// function setCards(productos) {
//     productos.forEach(shoe => {
//         const card = document.createElement("div");
//         card.classList = "shoe-card";
//         card.innerHTML = `<img class= "shoe-img" src="${shoe.img}">
//         <h3 id="shoe-name" class="shoe-name" >${shoe.name}</h3>
//         <p id="shoe-price" class= "shoe-price">$${shoe.price}</p>
//         <button id="add-button" class="cart-button">Agregar</button>`
//         nuevaCard.appendChild(card);
//         card.getElementsByClassName("cart-button")[0].addEventListener("click", ()=> addToCart(shoe)); //Acá va toastify.
//     });
// }


