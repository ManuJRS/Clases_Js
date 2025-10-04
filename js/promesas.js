/*
Formula para crear una promesa
Paso 1: Instanciar (Se mete dentro de una funcion y se retorna)
Paso 2: if else para el resoult y reject
Paso 3: Ejeuctar la promesa con un .then o .catch

Teoria: Una promesa en JS es un objeto que representa la finalizacion o el fracaso de una operacion asincrona.
Las promesas son una forma de manejar operaciones asincronas en JS de manera mas legible y manejable que el uso tradicional de callbacks, evitando problemas como el callback hell.

Una promesa solo puede tener exito o fracas una unica vez y no puede cambiar de exito a fracaso posteriormente.

Una promesa la podemos ve como un if else, el result es como un return positivo y el reject es como un return negativo.

tanto el metodo result como el reject son metodos estaticos, significa que no necesito crear una estancia para poder utilizarlos.

Las promesas nos convienen cuando tenemos una concatenacion de varios procesos asincronos.

Hoy en dia muchas APIs trabajan retornando promesas.

fetch es la forma moderna de hacer AJAX, todo lo trabaja internamente en un objeto de tipo promesa, de tal manera que para ir trabajando todos los datos que te devuelve una peticion AJAX mediente un FETCH, vas a tener que utilizar estos metodos ".then y .catch".

Para acceder a un valor de la promesa, primero debes ejecutar el metodo .then

Los .then() son funciones asincronas, si quieres devolver algo asincrono debes retornar una promesa.

podemos tener tantos metodos .then como necesitemos.

Aqui los .then() se encuentran al mismo nivel, no como los callback que tienen su callback hell al anidarlos

Si solo me quedo en un nivel de anidacion conviene usar el callback.

las promesas solo convienen una concatenacion de varios procesos.

.catch es el metodo que va a capturar el error resultante de reject

La evolucion de las promesas

Es un codigo mejor ordenado y sobre todo tiene una "mejor manipulacion de errores" y no tienes que estar repitiendo la validadcion del error.

en los callbacks en cada ejecucion tienes que estar validando el error.

las promesas ya tienen su propio mecanismo para rechazar en cualquier parte del flujo donde se de un error, mandarlo y trabajarlo.

Diferencias entre promesas y callbacks

promesas:

*/

/*function miOperacionConCallback(callback) {
    setTimeout(() => {
        callback("Hola")
    }, 1000);
}
miOperacionConCallback((dato) => {
    console.log(dato)
})*/


/*let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hola")
    }, 1000);
})
miPromesa.then((resultado) => {
    console.log(resultado)
})*/

/*
let myPromise = new Promise((resolve, reject) => {
    let succes = false;
    if (succes) {
        resolve("Operacion exitosa")
    } else {
        reject("Error en la operacion")
    }
});


myPromise.then((mensaje) => {
    console.log(mensaje);
})
    .catch((error) => {
        console.log(error)
    })*/

//Encadenamiento de promesas
/*let count = new Promise((resolve, reject) => {
    resolve(1)
})

count.then((resultado) => {
    console.log(resultado)
    return resultado + 1;
})
    .then(function (resultado) {
        console.log(resultado)
        return resultado + 1;
    })
    .then(function (resultado) {
        console.log(resultado);
    })*/

/*
//Esta es una mala practica
new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        reject("Es menor a 0.5")
    }
    resolve("Es mayor")
}).then((numero) => {
    console.log(numero);
}).catch((positivo) => {
    console.log(positivo)
})*/

/*
function hacerAlgo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = false
            if (exito) {
                resolve("Operacion exitosa");
            } else {
                reject("Operacion fallida");
            }
        }, 2000);
    })
}

hacerAlgo()
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })*/

/*(function () {
    function getUsers() {
        setTimeout(() => {
            console.log("Users are ready")
        }, 3000);
    }
    function getProject() {
        setTimeout(() => {
            console.log("Projects are ready")
        }, 1000);
    }
    function getIssues() {
        setTimeout(() => {
            console.log("issues are ready")
        }, 2000);
    }
    getUsers()
    getProject()
    getIssues()
})()*/

(function () {
    function getUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Users are ready")
                resolve([1, 2, 3, 4])
            }, 3000);
        })
    }
    function getProject() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Projects are ready")
                reject()
            }, 1000);
        })
    }
    function getIssues() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("issues are ready")
                resolve()
            }, 2000);
        })
    }

    getUsers()
        .then((users) => {
            console.log(users)
            return getProject
        })
        .then(getIssues)
        .catch((error) => {
            console.log(error)

        })
})()
