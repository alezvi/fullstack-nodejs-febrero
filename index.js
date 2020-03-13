let fs = require('fs')

if ( process.argv[2] !== 'undefined' ) {
    console.log( process.argv[2] )
}
else {
    throw new Error('Necesito el parametro "status"')
}
