let nombre = "Milagros"
let pais = "Argentina"
let edad = 18
let tieneTrabajo = false
let trabajoTexto 
if(tieneTrabajo){
    trabajoTexto = "Si tengo trabajo"
} else{
    trabajoTexto= "No tengo trabajo"
}

//ejercicio 1
console.log ("Hola mi nombre es " + nombre + ", soy de " + pais + ", tengo " + edad + " años de edad y " + trabajoTexto)

//ejercicio 2
let esMayor = edad >=18

if(esMayor) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

//ejercicio 3

console.log (trabajoTexto)

//ejercicio 4

if(tieneTrabajo && esMayor){
    console.log("Esta trabajando")
} else if (!tieneTrabajo && esMayor){
    console.log ("Puede trabajar")
} 
else {
    console.log ("No puede Trabajar")
}
