// Ejercicio 1

let verbos = ["want", "like", "need", "have", "buy", "walk", "talk"]

function invertir() {
    for (let i = verbos.length - 1; i >= 0; i--) {
        console.log(verbos[i])
    }
}

invertir()

// Ejercicio 2

let frutas = ["Manzana", "Banana", "Naranja", "Uvas", "Frutilla"]

function borrarTodo() {
    
    let cantidadDeElementos = frutas.length

    for (let i = 0; i < cantidadDeElementos; i++) {
        frutas.pop()
        console.log(frutas)
    }
}
borrarTodo()

// Ejercicio 3 

let numeros = ["1", "2", "3"]

function duplicarElementos() {
    for (let i = 0; i < numeros.length; i++) {
        console.log ((numeros[i]) + (numeros[i]))
    }
}

duplicarElementos()


