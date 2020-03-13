let fs = require('fs')
let filePath = __dirname + '/tasks.json'

// node tareas agregar status:pending text:"practicar mucho sobre javascript

let prefix = 'task_'

let accion = process.argv[2] // agregar
let [propStatus, status] = process.argv[3].split(':') // status:pending
let [propText, text] = process.argv[4].split(':')   // text:practicar mucho javascript

let task = {
    [prefix + propStatus]: status, 
    [prefix + propText]: text
}

if ( !fs.existsSync(filePath) ) {
    fs.writeFileSync(filePath, '[]')
}

// leer el contenido del archivo tasks.json (string)
let content = fs.readFileSync(filePath, { encoding: 'utf8' })

// convertir el string a un array de objetos (parsear)
let tasks = JSON.parse(content)

// hace el push
tasks.push(task)

// volver a convertir a json (stringify)
content = JSON.stringify(tasks)

// guardar la informacion actualizada en el archivo
fs.writeFileSync(filePath, content)
