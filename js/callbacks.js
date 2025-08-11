//Callbacks: Es una funcion que recibe como valor otra funcion y la ejecuta dentro de la primer funcion

//Esto es una funcion sincrona porque se ejecuta al instante, no tiene ningun retraso de informacion
/*let primerFuncion = (perro) => {
    console.log("inicio")
    perro()
    console.log("fin")
}
let segundaFuncion = () => {
    console.log("proceso intermedio")
}
primerFuncion(segundaFuncion)*/

/*let primerFuncion = (numUno, numDos, segundaFuncion) => {
    //console.log(numUno + numDos)
    let total = numUno + numDos
    segundaFuncion(total)
}
let segundaFuncion = (total) => {
    console.log(`el monto total es: ${total}`)
}
primerFuncion(10, 5, segundaFuncion)*/

























//Crea una función llamada calcular que reciba dos números y una función callback. La función debe multiplicar los dos números y pasar el resultado al callback. El callback debe imprimir el resultado.


/*let calcular = (numUno, numDos, callback) => {
    let resultado = numUno * numDos
    callback(resultado)
}
let mostrarResultado = (res) => {
    console.log(`el resultado es: ${res}`)
}
calcular(5, 5, mostrarResultado)*/





























//Crea una función saludar que reciba un nombre y una función callback. Debes ejecutar el saludo

/*let saludar = (name, callback) => {
    let saludo = name
    callback(saludo)
}
let mostrarSaludo = (miNombre) => {
    console.log(`Hola: ${miNombre}`)
}
saludar("manuel", mostrarSaludo)*/















//Un callback que ponga marca de coche y que muestre en cosola la marca

/*let coche = (marca, callback) => {
    let marcaCoche = marca
    callback(marcaCoche)
}
let mostrarMarca = (miCoche) => {
    console.log(`El coche es de la marca: ${miCoche}`)
}
coche("Nissan", mostrarMarca)*/





























//por que si cambio el parametro lib de la funcion mostrarLibro a libro, sigue funcionando, no deberia causar un error?

/*let libro = (titulo, genero, callback) => {
    let infoLibro = titulo + " del genero " + genero;
    callback(infoLibro);
}
let mostrarLibro = (lib) => {
    console.log(`El titulo y genero del libro son: ${lib}`)
}
libro("Hobbit", "Fantasia", mostrarLibro)*/

















/*let firstAction = function (callback) {
    console.log("primera accion");
    callback("Soy la segunda accion");
}
let secondAction = function (data) {
    setTimeout(() => {
        console.log(data)
    }, 2000);
}
setTimeout(() => firstAction(secondAction), 3000);*/











//Crear dos funciones, una de ellas debe recibir dos parametros uno texto y la otra funcion, con un retraso de dos segundos.


/*let primeraFuncion = (texto, callback) => {
    console.log(`Hola ${texto}`)
    callback()
}
let segundaFuncion = (text) => {
    console.log(`Adios ${text}`)
}

setTimeout(() => {
    primeraFuncion("Manuel", segundaFuncion("Manuel"))
}, 2000);*/



/*let primeraFuncion = (texto, callback) => {
    console.log(`Hola ${texto}`)
    callback()
}
let segundaFuncion = (text) => {
    console.log(`Adios ${text}`)
}*/

/*setTimeout(() => {
    primeraFuncion("Manuel", () => segundaFuncion("Manuel"))
}, 2000);*/

/*setTimeout(() => {
    primeraFuncion("Manuel", () => {
        segundaFuncion("Manuel")
    })
}, 2000);*/








/*let firstAction = (callback, message, anotherCallback) => {
    console.log(message)
    callback()
    setTimeout(() => {
        anotherCallback()
    }, 2000);
}
let secondAction = (message) => {
    console.log(message)
}
let thirdAction = (message) => {
    console.log(message)
}

setTimeout(() => {
    firstAction(() => {
        secondAction("Soy la segunda accion")
    }, "Soy un texto", () => {
        thirdAction("Soy la ultima accion")
    })
}, 2000);*/






//Crea una funcion callback que multiplique dos valores, solo se va a usar una sola funcion flecha

/*let ejercicio = (numUno, numDos, callback) => {
    return callback(numUno, numDos)
}
console.log(ejercicio(5, 2, (a, b) => a * b))*/













/*function buscar(dni, fn) {
    setTimeout(() => {
        fn("Esta fue la tabla del 5 xd")
    }, 2000);
}

buscar("12345678", (name) => {
    console.log(name)
});

for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${5} = ${i * 5}`)
}*/


















//Crea una función que reciba dos números y un callback, y el callback mostrará el resultado en consola.

/*function suma(a, b, callback) {
    let resultado = a + b
    callback(resultado);
}
function mostrarResultado(res) {
    console.log(`El resultado es: ${res}`);
}

suma(5, 2, mostrarResultado);*/







//Crea una función que reciba un nombre y un callback. El callback debe mostrar un mensaje personalizado.

/*function saludar(nombre, callback) {
    callback(`Hola, ${nombre}! Bienvenido`);
}
function imprimirMensaje(mensaje) {
    console.log(mensaje)
}

saludar("Manuel", imprimirMensaje)*/











//Crea una función que reciba dos números y un callback. El callback decidirá qué operación hacer (suma, resta, multiplicación).

/*function operacion(a, b, callback) {
    let resultado = callback(a, b);
    console.log("Resultado", resultado);
}

function suma(x, y) {
    return x + y;
}

function multiplicar(x, y) {
    return x * y;
}

operacion(10, 5, suma)*/












//Simula que una tarea tarda en completarse usando setTimeout y luego llama a un callback.

/*function hacerTarea(tarea, callback) {
    console.log(`comenzando: ${tarea}...`);
    setTimeout(() => {
        console.log(`${tarea} completada`);
        callback();
    }, 2000);
}
hacerTarea("Descargar archivo", () => {
    console.log("Todo listo")
});*/