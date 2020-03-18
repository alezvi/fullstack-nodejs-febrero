let productos = [
    {title: "laptop", qty: 3, price: 9786.99},
    {title: "mouse", qty: 3, price: 564.99},
    {title: "monitor", qty: 1, price: 56000.99},
    {title: "camara", qty: 2, price: 2835.99},
]

let final = {
    cantidadTotal: 0,
    precioTotal: 0,
}

let resumen = productos.reduce(function (resultado, producto) {
    resultado.precioTotal = (producto.price * producto.qty) + resultado.precioTotal
    resultado.cantidadTotal = resultado.cantidadTotal + producto.qty
    return resultado
}, final)

console.log( resumen )

let numeros = [1,4,7,9,7]

let suma = numeros.reduce(function (anterior, actual) {
    return anterior + actual
}, -5)

console.log( suma )
