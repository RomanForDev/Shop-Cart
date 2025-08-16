function addToCart(producto) {
    const memoria = localStorage.getItem("products");
    if(!memoria) {
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("products", JSON.stringify([nuevoProducto]));
    } else {
        if(nuevoProducto)
    }
}