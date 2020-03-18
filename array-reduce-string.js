let frase = [
    'Lorem', 'Ipsum', 'is', 'simply', 'dummy', 
    'text', 'of', 'the', 'printing', 'and', 'typesetting'
]

// reduce
let resultado = frase.reduce(function (anterior, actual) {
    console.log(anterior)
    return anterior + ' ' + actual
})

console.log(resultado)

