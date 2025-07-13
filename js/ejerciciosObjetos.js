//nombra cada uno de los tipos de las propiedades
let libro = {
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
console.log(libro.editorial.pais);