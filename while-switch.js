

function encontreUn5(numeros) {
    let i = 0

    while (i < numeros.length) {
        if (numeros[i] == 5) {
            console.log('Se encontró un 5!')
            break
        } 
        
        i++
    }
}


let hoy = 'jueves'

switch (hoy) {
    case 'lunes':
        console.log('buena semana')
        break

    case 'martes':
    case 'jueves':
        console.log('tenes que ir a clases')
        break

    case 'miercoles':
    case 'viernes':
        console.log('...')
        break
    
    default:
        console.log('no se bien que dia es hoy...')
}