/* set: estructura de tipo array pero de datos unicos (datos primitivos), por que la memoria de JS cada objeto es una referencia unica aunque el objeto este vacio.
*/

/*const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOLA"])

console.log(set)
console.log(set.length)
console.log(set.size)

const setDos = new Set([])
setDos.add(true)
console.log(setDos)
setDos.add("hola")
setDos.add(2)
setDos.add({})
console.log(setDos)

for (const elemento of setDos) {
    console.log(elemento)
}

setDos.forEach(element => {
    console.log(element)
});*/

/** Symbol: es un tipo de dato primitivo su valor se va a mantener privado y de uso interno */

/*let idUno = "Hola"
let idDos = "Hola"
let idTres = Symbol("Mundo")
let idCuatro = Symbol("Mundo")
console.log(idTres === idCuatro)
console.log(typeof idTres)

const nombre = Symbol();
const persona = {
    [nombre]: "Manuel",
    apellido: "Rejon",
    edad: 30
}

console.log(persona)
persona.nombre = "manuel dos"

console.log(persona)

for (const key in persona) {
    console.log(persona[key])
}

const saludar = Symbol();
persona[saludar] = () => {
    console.log("Hola Mundo")
}
persona[saludar]();

console.log(persona)

console.log(Object.getOwnPropertySymbols(persona))*/

/** Map: los maps son objetos que nos sirven para almacenar valores asociados */


let mapa = new Map();
mapa.set("Nombre", "Manuel")
mapa.set("Apellido", "Rejon")
console.log(mapa)
console.log(mapa.has("Correo"))
console.log(mapa.get("Apellido"))
mapa.set("Apellido", "Santana")
console.log(mapa)
mapa.delete("Nombre")
console.log(mapa)
for (const element of mapa) {
    console.log(element)
}