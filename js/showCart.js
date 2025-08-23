// Funcion para escribir el HTML con la información del carrito.

const cartView = document.getElementById('cards-cart');

const memory = JSON.parse(localStorage.getItem("products"));

function writeCart() {
    cartView.innerHTML = "";
    if(!memory) {
        const messageView = document.createElement("div");
            messageView.classList = "item";
            messageView.innerHTML = `<p>No hay productos en el carrito</p>
            <a href="../index.html"><button id="back-button" class="button">Volver</button></a>`;
            cartView.appendChild(messageView);
    }else {
        memory.forEach(item => {
            const itemView = document.createElement("div");
            itemView.classList = "item";
            itemView.innerHTML = `<p>${item.name}, ${item.price}, x${item.cantidad}</p>
            <button id="del-button" class="button">Quitar</button>`;
            cartView.appendChild(itemView);
            itemView.querySelectorAll("button")[0].addEventListener("click", ()=> {
                deleteFromCart(memory);
                // addToCart()
            });
            //Si se quiere un boton para agregar junto al de quitar, descomentar línea 23 y copiar y pegar línea 25 despues de línea 19.
            // itemView.querySelectorAll("button")[1].addEventListener("click", ()=> console.log('Elemento quitado del carrito!'));
    })}
}
// }<button id="add-button" class="add-button">Agregar</button>`

writeCart(memory);


// Función para sumar cantidades y precio total del carrito;

function sum(array){
    let cantidades = array.map(objeto => objeto.cantidad*objeto.price);
    let sum = cantidades.reduce((a, b) => a + b, 0);
    return sum;
}

//Funcion que muestra el total de todo el carrito;

const showTotal = document.getElementById("total");

function viewTotal() {
    const total = document.createElement("span");
    total.classList = 'total-number';
    total.innerHTML = `Total a pagar: ${sum(memory)}`;
    showTotal.appendChild(total);
}

viewTotal();