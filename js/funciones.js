//Funcion declarada: Nos permite ejecutar una funcion antes de su declaracion
/*saludar()
function saludar() {
    console.log("hola mundo")
}
//saludar()*/

//Funcion expresada: Se guarda una funcion anonima dentro de una variable y esta no puede ser ejecutada antes de su declaracion
/*saludar()
let saludar = function () {
    console.log("Hola mundo")
}
saludar()*/

/*let saludar = function (nombre, apellido) {
    return nombre + apellido //Nada se ejecuta despues del return
}
//saludar("Manuel", "Rejon")*/

/*let saludar = function (nombre, apellido) {
    console.log("Hola Mundo")
    return nombre + apellido // Nada se ejecuta despues del return
    console.log("Hello World")
}
saludar()*/

/*function ejercicio() {
    console.log("uno")
    return 1
}
let caja = ejercicio() // guarda la ejecucion
let cajaDos = ejercicio
console.log(typeof cajaDos)*/

//funcion anonima auto ejecutable
/*function unaFuncion() {
    console.log("hola mundo")
    return (function () {
        console.log("hello world")

    })()
}
unaFuncion()
console.log(typeof unaFuncion())*/

//tipos de funciones anonimas
//funcion anonima clasica
/*(function () {
    console.log("Hola Mundo")
})()*/

//funcion anonima crockford
/*(function () {
    console.log("Hola Mundo")
}())*/

//funcion anonima unaria
/*+function () {
    console.log("Hola Mundo")
}()*/

//funcion anonima facebook
/*!function () {
    console.log("Hola Mundo")
}()*/

/*const saludar = name => console.log(name)
saludar("Manuel")*/

//const saludar = name => name

//const suma = (a, b) => a + b

/*const crearObjeto = (nombre, edad) => {
    return {
        name: nombre,
        age: edad
    }
}*/

/*const crearObjeto = (name, age) => {
    return {
        name,
        age
    }
}*/

/*function saludar(nombre) {
    persona = nombre || "Desconocido"
    console.log(`${persona}`)
}
saludar()*/

let usuarioOriginal = {
    nombre: "Manuel",
    edad: 30
}

function actualizarUsuario(usuario) {
    usuario.nombre = "Pedro";
    usuario.edad = 25;
}

console.log("Antes de actualizar", usuarioOriginal)

actualizarUsuario(usuarioOriginal)

console.log("Despues de actualizar", usuarioOriginal)