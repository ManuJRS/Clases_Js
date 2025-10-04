/*
Que es un closure?
Es una funcion que tiene acceso al ambito de su funcion externa
incluso despues de que esta haya regresado. Esto significa que un cierre puede recordar y acceder a las variables y argumentos de su funcion externa, incluso despues de que la funcion haya finalizado.

Cuando creas una funcion dentro de otra funcion, la funcion interna tiene acceso no solo a sus propias variables y a las variables normales, si no tambien a las variables de la funcion externa en la que fue definida
*/

/*function externa() {
    let variableExterna = "Soy la variable externa";
    function interna() {
        console.log("Variable externa");
    }
    return 2
}
const closure = externa();
console.log(typeof closure)*/

//Explicacion simplificada
//Son funciones que "capturan" variables en su entorno circundantes. esto puede ser util para crear funciones que mantenen un estado interno.

/*function contador() {
    let count = 0;
    return function () {
        return ++count
    }
}
const incrementar = contador()
console.log(incrementar())
console.log(incrementar())
console.log(incrementar())*/

function contador() {
    let count = 0
    return count + 1
}

console.log(contador())
console.log(contador())
console.log(contador())