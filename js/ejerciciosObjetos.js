//nombra cada uno de los tipos de las propiedades
/*let libro = {
    titulo: "La carretera", //Porque en consola aparece hasta abajo del objeto en la consola (Es un string)
    autor: "Cormac McCarty", // (string)
    año: 2006, // (Numero)
    generos: ["Cienca Ficción", "postapocaliptica"], // (array)
    editorial: { // (objeto)
        nombre: "Random House", // (string)
        pais: "España" // (string)
    }
}

//Imprime el objeto completo.
console.log(libro);

//Agrega una nueva propiedad llamada disponible (tipo booleano).
libro.disponible = true;

//Elimina la propiedad año y vuelve a imprimir el objeto.
delete libro.año;

//El título del libro
console.log(libro.titulo);
//El nombre del autor
console.log(libro.autor);
//El primer género del arreglo
console.log(libro.generos[0]);
//El nombre de la editorial
console.log(libro.editorial.nombre);
//El país de la editorial
console.log(libro.editorial.pais);*/

/*let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    colores: ["rojo", "azul", "blanco"],
    duenio: {
        nombre: "Manuel",
        edad: 30,
        licencia: true,
        familiares: ["Manuel", "Maria", "Linda"]
    }
}

console.log(coche.marca);
console.log(coche.colores[2]);
console.log(coche.duenio.nombre);
console.log(coche.duenio.familiares[1]);
coche.matricula = "1234";
console.log(coche);
coche.kilometraje = 2000;
coche.anio = 2021;
delete coche.duenio.licencia;*/

/*let persona = {
    name: "Manuel",
    age: 30,
    redesSociales: ["Face", "IG", "Twitter"],
    amigos: {
        prepa: "Oscar",
        trabajo: "Josh",
        Secundaria: "pepe"
    },
    saludar() {
        console.log(`Mi nombre es: ${this.name}`)
    }
}
persona.saludar()*/

const sumar = () => {
    console.log("Hola")
}
sumar()

function saludar() {
    console.log("Holis")
}
saludar()

let restar = function () {
    console.log("hola")
}
restar()