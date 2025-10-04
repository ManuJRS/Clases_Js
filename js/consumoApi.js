//Ajax significa asinchronous javascript and xml

/*
Es el uso del objeto XMLHttpRequest para comunicarse con los servidores.
Tanto fetch como Ajax son tecnicas que permiten hacer peticiones HTTP asincronas a un servidor, lo que significa que puedes obtener o enviar datos sin tener que recargar la pagina.
XML era un lenguaje de marcado que fue relegado json, se utilizaba para el intercambio de informaciòn, cualquier lenguaje backend puede leer archivos json y xml.
Ajax comenzò a trabajar con xml para la carga de nuevo contenido. 
Ajax fue creado por microsoft, el objeto XMLHttpRequest ya es un objeto obsoleto se utilizaba en internet explores hacia abajo.

Ajax no es una tecnologia en si mismo, en realidad se trata de varias tecnologias independientes que se unen:
HTML y Css para crear maquetas-
El DOM de JS para la interaccion y manipulacion dinamica
HTML, XML y Json para el intercambio y manipulaciòn de info
XMLHttpRequest o fetch para el intercambio asincrono de informaciòn
JS para unir las demàs tecnologìas.

Respuestas informativas 
100 al 199

Respuestas satisfactorias 
200 a 299 

Redirecciones
300 a 399

Errores de los clientes 
400 al 499

errores del servidores
500 a 599

Json
Es un formato ligero de intercambio de datos, antes de Json existiìa XML

JSON.parse() Analiza una notacion de json y lo convierte a un tipo de dato Js.

Ajax se ejecuta en un servidor web, porque trabaja en el lado del cliente como del servidor, osea debe usar el protocolo http para que aparezca el protocolo host y no el files.

API, aplication programing interfaces DOM y AJAX son una API.

Estados de una petición asincrona                                                Valor
READY_STATE_UNINITIALIZED
(estado de no inicialización)                                                      0
READY_STATE_LOADING
(estado de cargando, donde envía los datos al servidor)                            1
READY_STATE_LOADED
(cargado,ya el servidor respondio al cliente, 
pero aún no tiene la info lista para que empecemos a interactuar)                  2
READY_STATE_INTERACTIVE
(el motor de js ya empieza a interactuar porque ya
tiene los datos de esta petición)                                                  3
READY_STATE_COMPLETE:
(cuando ya ha terminado todo el proceso de AJAX osea
el objeto XMLHttpRequest hace la peticion, el servidor responde de que ya
tiene los datos listos para que nosotros lo manipulemos y mostremos la info)       4

Para que funcione nuestro objeto XMLHttpRequest necesitas 4 cosas:

1/ XMLHttpRequest debe tener una instacia con new.
2/ Asignar un evento.
3/ Abrir la peticion, asignando el metodo por el que lo vamos a hacer y ponerle la url (tambien se le conoce como ENDPOINT).
4/ 
*/

/*console.log("{}")
//console.log({})

let dato = JSON.parse("true");
console.log(dato);
console.log("true");*/

/*let prueba = JSON.parse(`
    {"nombre": "Manuel", 
    "edad": 30}`
)
console.log(prueba)*/

//JSON.stringify()
/*let dato = JSON.stringify({ nombre: "Manuel" })
console.log(typeof dato)*/

(function () {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment
    // console.log(xhr)
    xhr.addEventListener('readystatechange', e => {
        console.log(xhr)
        if (xhr.readyState !== 4) return;
        //console.log(xhr)
        //if (xhr.status >= 200 && xhr.status < 300)
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.send()
})()