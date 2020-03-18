const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',

    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    guardarTarea: function (tarea) {
        let tareas = this.leerJSON();

        tareas.push(tarea)

        this.escribirJSON(tareas)
    },

    escribirJSON: function (data) {
        fs.writeFileSync(this.archivo, JSON.stringify(data))
    },

    filtrarPorEstado: function (estado) {
        let tareas = this.leerJSON();

        return tareas.filter(function (tarea) {
            return tarea.estado == estado
        })
    }
}

module.exports = archivoTareas;