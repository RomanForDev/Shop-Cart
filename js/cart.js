function addToCart(producto) {
    const memory = JSON.parse(localStorage.getItem("products"));
    if(!memory) {
        const nuevoProducto = addToMemory(producto);
        localStorage.setItem("products", JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memory.findIndex(shoe => shoe.id === producto.id);
        const newMemory = memory;
        if(indiceProducto === -1) {
            newMemory.push(addToMemory(producto));
        } else {
            newMemory[indiceProducto].cantidad ++;
        }
        localStorage.setItem("products", JSON.stringify(newMemory));
    }
}

function addToMemory(producto) {
    const newProduct = producto;
    newProduct.cantidad = 1
    return newProduct;
}