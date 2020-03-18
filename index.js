// file system
let fs = require('fs')

let tasks = []

tasks.push({
    status: "finished",
    text: "hacer ejercicios de playground"
})

tasks.push({
    status: "progress",
    text: "practicar en clase"
})

tasks.push({
    status: "pending",
    text: "leer slack"
})

let data = JSON.stringify(tasks, null, ' ')

fs.writeFileSync('tasks.json', data)

console.log('finalizado!')
