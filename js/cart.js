function addToCart(producto) {
    const memory = JSON.parse(localStorage.getItem("products"));
    if(!memory) {
        const nuevoProducto = addToMemory(producto);
        localStorage.setItem("products", JSON.stringify([nuevoProducto]));
        sumNumber();
    } else {
        const indiceProducto = memory.findIndex(shoe => shoe.id === producto.id);
        const newMemory = memory;
        if(indiceProducto === -1) {
            newMemory.push(addToMemory(producto));
        } else {
            newMemory[indiceProducto].cantidad ++;
        }
        localStorage.setItem("products", JSON.stringify(newMemory));
        sumNumber();
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
    let memoryCheck = JSON.parse(localStorage.getItem("products"));
    if(!memoryCheck) {
        number.innerHTML = '0';
    }else {
        number.innerHTML = sumNumber(memoryCheck);
        console.log(memoryCheck);
    }
}


//Show number no puede ejecutarse en ningún lado porque el .map rompe al recibir un elemento que no es array o no es válido para su funcion hecha como el orto por los divinos que se juntan en los ES son unos autenticos genios chicos de verdad la rompen gracias por no dedicarse a otra cosa.
