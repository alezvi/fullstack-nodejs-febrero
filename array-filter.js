let numeros = [0,1,2,3,4,5,6,7,8,9]

let estudiantes = [
    {name: "Alejandro", present: true},
    {name: "Maru", present: true},
    {name: "Nacho", present: false},
]

let presentes = estudiantes.filter(function (e) {
    return e.present == true
})

console.log(presentes)

// filter
let pares = numeros.filter(function (numero) {
    return numero % 2 == 0
})

let impares = numeros.filter(function (numero) {
    return numero % 2 != 0
})

console.log(pares, impares)
