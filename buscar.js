let fs = require('fs')

let txt = fs.readFileSync('tasks.json', {
    'encoding' : 'utf8'
})

let tasks = JSON.parse(txt)

let results = []

if (process.argv[2] !== 'undefined') {
    switch (process.argv[2]) {
        case 'status:pending':
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].status == 'pending') {
                    results.push(tasks[i])
                }
            }
            break
    }
}

console.log(results)