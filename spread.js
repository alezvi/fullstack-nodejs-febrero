
function sumar(...numbers) {
    return numbers.reduce(function (anterior, actual) {
        return anterior + actual
    }, 0)
}

let diasDeTrabajo = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
let finDeSemana = ['sabado', 'domingo']
let diasDeLaSemana = [...diasDeTrabajo, ...finDeSemana]


let profile = {
    firstName: 'ale',
    lastName: 'villa'
}

let company = { name: 'Digital House' }

perfilSimple = {...profile, ...company}

perfilAnidado = {...profile, ...{company}}

console.log( sumar() )