
//Agregar al carrito (array de objetos):

function addToCart(producto) {
    const memory = JSON.parse(localStorage.getItem("products"));
    if(!memory) {
        const nuevoProducto = addToMemory(producto);
        localStorage.setItem("products", JSON.stringify([nuevoProducto]));
        sumNumber();
        notificationAdded();
    } else {
        const indiceProducto = memory.findIndex(shoe => shoe.id === producto.id);
        const newMemory = memory;
        if(indiceProducto === -1) {
            newMemory.push(addToMemory(producto));
            notificationAdded();
        } else {
            newMemory[indiceProducto].cantidad ++;
            notificationAdded();
        }
        localStorage.setItem("products", JSON.stringify(newMemory));
        sumNumber();
    }
}

//LocalStorage para emular base de datos (otra parte debería ir a session)

function addToMemory(producto) {
    const newProduct = producto;
    newProduct.cantidad = 1
    return newProduct;
}

//Modificar el número en el display del carrito en la página con lo que se suma al array de objetos del carrito. Funcion showNumber();

let numberCart = document.getElementById("items-cart");

//Funcion para hacer correctamente la suma de cada OBJETO dentro del array, separado de las cantidades de cada producto que se agrege en la clave cantidad que se añade en línea 16.

function sumNumber(array){
    if(!array){
        showNumber();
    }else{
        let cantidades = array.map(objeto => objeto.cantidad);
        let sum = cantidades.reduce((a, b) => a + b, 0);
        return sum;
    }
}

function showNumber() {
    let number = document.getElementById('items-cart');
    let memoryCheck = JSON.parse(localStorage.getItem("products")); //memoryCheck es una nueva variable porque memory es scope local. Solo verifica pero tiene que parsear de nuevo.
    if(!memoryCheck) {
        number.innerHTML = '0';
    }else {
        number.innerHTML = sumNumber(memoryCheck);
    }
}
showNumber();

//Función que elimina elementos que fueron añadidos al carrito;

function deleteFromCart(producto) {
    const memoryCheckDelete = JSON.parse(localStorage.getItem("products"));
    const deleteIndex = memoryCheckDelete.findIndex(item => item && item.id === producto.id);
    if (deleteIndex === -1) {
        console.log("Producto no encontrado en el carrito.");
        return;
    }
    // Eliminar producto si la cantidad es 1 o si es mas disminuir la cantidad
    if (memoryCheckDelete[deleteIndex].cantidad === 1) {
        memoryCheckDelete.splice(deleteIndex, 1);
    } else {
        memoryCheckDelete[deleteIndex].cantidad--;
    }
    localStorage.setItem("products", JSON.stringify(memoryCheckDelete));
    showNumber();
}



