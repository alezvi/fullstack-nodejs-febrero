let pesos = 'asdasd'
let {pesos: fnPesos, dolar : fnDolar} = require('./moneda')

console.log(fnPesos(123), fnDolar(678))
