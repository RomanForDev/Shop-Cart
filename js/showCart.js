// Funcion para escribir el HTML con la información del carrito.

const cartView = document.getElementById('cards-cart');

const memory = JSON.parse(localStorage.getItem("products")) // || [];

function writeCart() {
    cartView.innerHTML = "";
    if(!memory || memory.length === 0) {
        const messageView = document.createElement("div");
            messageView.classList = "item";
            messageView.innerHTML = `<p>No hay productos en el carrito</p>
            <a href="../index.html"><button id="cart-button" class="back-button">Volver</button></a>`;
            cartView.appendChild(messageView);
    }else {
        memory.forEach(item => {
            const itemView = document.createElement("div");
            itemView.classList = "item";
            itemView.innerHTML = `<p>${item.name}, ${item.price}, x${item.cantidad}</p>
            <button id="del-button" class="cart-button">Quitar</button>`;
            cartView.appendChild(itemView);
            itemView.querySelectorAll("button")[0].addEventListener("click", ()=> {
                deleteFromCart(item);
                // Actualizar la vista del carrito dinámicamente
                updateCartView();
                // Actualizar el total
                updateTotal();
                notificationDelete();
            });
            //Si se quiere un boton para agregar junto al de quitar, descomentar línea 24 y copiar y pegar línea 30 despues de línea 19.
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
    if(memory){
    const total = document.createElement("span");
    total.classList = 'total-number';
    total.innerHTML = `Total a pagar: ${sum(memory).toFixed(2)}`;
    showTotal.appendChild(total);}
}

viewTotal();


// Función para actualizar la vista del carrito
function updateCartView() {
    const updatedMemory = JSON.parse(localStorage.getItem("products"));
    memory.length = 0; // Limpiar el array de memoria
    if (updatedMemory) {
        updatedMemory.forEach(item => memory.push(item));
    }
    writeCart();
    
    // Actualizar también el número del carrito en el header
    updateCartNumber();
}

// Función para actualizar el número del carrito en el header
function updateCartNumber() {
    const cartNumberElement = document.getElementById('items-cart');
    if (cartNumberElement) {
        if (!memory || memory.length === 0) {
            cartNumberElement.innerHTML = '0';
        } else {
            const totalItems = memory.reduce((sum, item) => sum + item.cantidad, 0);
            cartNumberElement.innerHTML = totalItems;
        }
    }
}

// Función para actualizar el total
function updateTotal() {
    showTotal.innerHTML = "";
    viewTotal();
}

// Función para reinicio del carrito;

const reset = document.getElementById('reset-cart');
reset.addEventListener('click', () => {
    // Notificación de reinicio del carrito; Esto hay que añadirlo a la función para que se ejecute con el confirm y luego muestre el mensaje de la confirmación.
    resetCart();
    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    //     target: 'body',
    //     topLayer: `true`
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         localStorage.removeItem("products");
    //         updateCartView();
    //         updateTotal();
    //         Swal.fire({
    //             title: "Deleted!",
    //             text: "Your file has been deleted.",
    //             icon: "success",
    //             target: 'body',
    //             topLayer: `true`
    //     });
    // }});
}); //ver si poniendo todo en una función y llamando a la función idrectamente desde el botón puedo. Porque está moviendo el footer al estar ya dentro de una clase el botón con el listener. Y el topLayer bien gracias...


// Notificacion de producto eliminado del carrito;

function notificationDelete(){
    Swal.fire({
    position: "bottom-start",
    icon: "success",
    title: "Producto eliminado!",
    showConfirmButton: false,
    timer: 1500,
    background: '#686868ff',
    color: '#ffffff',
    width: '13em',
    backdrop: false,
    target: 'body'
    });
}; 

// Notificación de reinicio del carrito; Est ohay que añadirlo a la función para que se ejecute con el confirm y luego muestre el mensaje de la confirmación.

function resetCart() {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        target: 'body',
        topLayer: `false`,
        scrollbarPadding: 'false'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("products");
            updateCartView();
            updateTotal();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                target: 'body',
                topLayer: `false`,
                scrollbarPadding: 'false'
        });
    }});
}; // VER PORQUE MIERDA ESTO MUEVE EL FOOTER PORQUE NO TIENE NINGÚN SENTIDO QUE LO HAGA!!!!!!!!!!!!!!
