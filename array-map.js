let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']

let numeros = [0,1,2,3,4,5,6,7,8,9]

let tablaDelDos = numeros.map(function (numero) {
    return numero * 2
})

console.log(tablaDelDos, numeros)

let diasEnMayusculas = []

for (let i = 0; i < dias.length; i++) {
    diasEnMayusculas.push(dias[i].toUpperCase())
}

console.log( diasEnMayusculas )

let pasarAMayuscula = function (dato) {
    return dato.toUpperCase()
}

// map
let resultadoDeMap = dias.map(pasarAMayuscula)

pasarAMayuscula('texto')

console.log( resultadoDeMap )
