// Funcion para escribir el HTML con la información del carrito.
// const cart = [];
const cartView = document.getElementById('cart-view');

const memory = JSON.parse(localStorage.getItem("products"));

function writeCart(arr) {
    if(!arr) {
        console.log("No hay productos en el carrito");
    }else {
        arr.forEach(item => {
            const itemView = document.createElement("div");
            itemView.classList = "item";
            itemView.innerHTML = `<p>${item}</p>`;
            cartView.appendChild(itemView);
            // console.log(memory)
    })}
}

writeCart(memory);