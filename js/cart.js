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
        sumNumber(newMemory);
        // console.log(newMemory);
        
    }
}

function addToMemory(producto) {
    const newProduct = producto;
    newProduct.cantidad = 1
    return newProduct;
}

let numberCart = document.getElementById("items-cart");

function sumNumber(array){
    let cantidades = array.map(objeto => objeto.cantidad);
    let sum = cantidades.reduce((a, b) => a + b, 0);
        console.log(sum);
    }


//Suma las cantidades sólo si son items distintos. Cuando se suma un item igual no suma ya que no es un nuevo elemento dentro del array sino que cambia el valor de una de sus claves. Yo tendría que acceder al valor de la clave cantidad en cada objeto para asignarlo al length.
