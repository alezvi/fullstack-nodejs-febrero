let maritalStatuses = [
    'married', 'single', 'divorced'
]

let firstName
let lastName
let age

let pet = {
    firstName: '',
    age: ''
}

let user = {
    // Propiedades o atributos
    firstName : '',
    lastName : '',
    age : null,
    maritalStatus: 2,
    hobbies : [],

    // Metodos
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    },

    getMaritalStatus: function () {
        return maritalStatuses[this.maritalStatus]
    }
}

user.firstName = 'Alejandro'
user.lastName = 'Villafañe'

console.log(user.getFullName())
