// Definición del Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Función para calcular el total del carrito
function calcularTotal(carrito) {
    let total = 0;
    for (let producto of carrito) {
        total += producto.precio;
    }
    return total;
}

// Función para mostrar el contenido del carrito
function mostrarCarrito(carrito) {
    console.log("Contenido del carrito:");
    for (let i = 0; i < carrito.length; i++) {
        console.log(`${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}`);
    }
}

// Función para simular el descuento
function aplicarDescuento(total) {
    if (carrito.length >= 3) {
        return total * 0.9; // Aplicar descuento del 10%
    }
    return total;
}

// Almacenar los productos en el carrito
const carrito = [];

// Ciclo para interactuar con el usuario y llenar el carrito
while (true) {
    const nombre = prompt("Ingrese el nombre del producto (o 'salir' para terminar):");
    if (nombre.toLowerCase() === "salir") {
        break;
    }

    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const producto = new Producto(nombre, precio);
    carrito.push(producto);

    const total = calcularTotal(carrito);
    console.log(`Total actual: $${total.toFixed(2)}`);
}

// Calcular el total con descuento (si aplica)
const totalConDescuento = aplicarDescuento(calcularTotal(carrito));

// Mostrar el contenido final del carrito y el total a pagar
mostrarCarrito(carrito);
console.log(`Total a pagar: $${totalConDescuento.toFixed(2)}`);

// Mostrar un mensaje de despedida
alert("¡Gracias por su compra!");
