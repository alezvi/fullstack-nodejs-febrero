let fs = require('fs')
let filePath = __dirname + '/tasks.json'

// leer el contenido del archivo tasks.json (string)
let content = fs.readFileSync(filePath, { encoding: 'utf8' })

// convertir el string a un array de objetos (parsear)
let tasks = JSON.parse(content)

let search = {
    status: '',
    text : '',
}

for (let i = 2; i < process.argv.length; i++) {
    let [prop, value] = process.argv[i].split(':')
    search[prop] = value
}

let coincide = function (task) {
    if (task.status == search.status && task.text.includes(search.text)) {
        return task
    }
}

let filtrados = tasks.filter(coincide)

console.log(filtrados)