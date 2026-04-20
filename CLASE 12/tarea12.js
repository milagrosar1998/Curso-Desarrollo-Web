// Ejercicio 1

function calcularAreaRectangulo(base, altura) {
    return base * altura
}
console.log(calcularAreaRectangulo(2, 4))

// Ejercicio 2

function esMayorDeEdad(edad) {
    return edad >= 18
}

console.log(esMayorDeEdad(18))

// Ejercicio 3

let pais = "Argentina"

function ciudadYPais() {
    let ciudad = "Villa Maria"

    console.log("Ciudad", ciudad)
    console.log("Pais", pais)
}

ciudadYPais()

function ciudadYPaisJunto() {
    let ciudad = "Villa Maria"
    console.log(ciudad + ", " + pais)
}

ciudadYPaisJunto()


// Ejercicio 4 

function repetirTexto(texto, veces) {
    for (let i = 0; i < veces; i++) {
        console.log(texto)
    }
}

repetirTexto ("Mili", 3)


// Parte 2 - Bonus

// Consultar si no es lo mismo que el ejercicio 4?
