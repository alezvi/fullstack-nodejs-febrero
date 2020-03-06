
// Funciones Puras
let apodo = 'pedrito'

function saludar(nombre) {
    let saludo = 'hola'

    if (typeof nombre == 'string') {
        return saludo + ' ' + nombre + '!'
    }

    return saludo + ' !'
}

console.log( saludar() )

function suma(a, b) {
    if ( isNaN(a) || isNaN(b) ) {
        return null
    }

    return a + b
}

let resultado = suma(1, 34)

console.log(resultado)
