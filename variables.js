// variables
const APP_VERSION = '1.2.3'

// Definir una variable
let abc

// Definir e inicializar una variable
var xyz = 123

// Redefinir (volver a crear) la variable
var xyz

// Reasignar (cambiar el valor y/o el tipo) una variable
xyz = 99



// Defino
let nombre = 'alejandro'

// Redefinir
nombre = nombre.toUpperCase()

let a = 45
let b = 84

let suma = a + b
let resta = a - b
let mul = a * b
let div = a / b
let pow = a ** b
let modulo = a % b

console.log(suma, resta, mul, div, pow, modulo)

let nulo = null
let dias = []
let obj = {}

console.log( typeof nulo, typeof dias, typeof obj )

console.log( Array.isArray(nulo) )


function sumar(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b
    }
}

console.log( 'afuera', sumar(4,5) ) 


// tipos de datos

let numeros = []

numeros.push(1, 2, 3)

// for, do while, while

for (let i = 0; i < numeros.length; i++) {
    console.log('valor de i ', i)
}

console.log('valor de i fuera del ciclo', i)

