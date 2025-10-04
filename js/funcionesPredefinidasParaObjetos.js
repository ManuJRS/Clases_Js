
let persona = {
    name: "Manuel",
    age: "30",
    friends: ["Oscar", "Luis", "Pedro"],
    saludar: function () {
        console.log("Hola Mundo");
    }
}
/*persona.saludar()*/
//sirve para detectar si existe la propiedad
console.log(persona.hasOwnProperty("name"))

delete persona.age
console.log(persona)

//Sirve para que no sea modificado el objeto
//Object.freeze(persona)

persona.time = 30;

console.log(persona)

//Sirve para mostrar las propiedades de un objeto
const propiedades = Object.getOwnPropertyNames(persona)
console.log(propiedades)

//Sirve para mostrar los valores de un objeto
const valores = Object.values(persona)
console.log(valores)

