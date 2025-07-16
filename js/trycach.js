/*try {
    console.log("en el try se agrega el codigo que se evaluara")
} catch (error) {
    console.log("el catch captura cualquier error que surja en el try pero solo se ejecutara si hay un error")
} finally {
    console.log("finally se ejecutara siempre al final de un trycatch")
}*/

try {
    let resultado = "mundo" / "hola"
    console.log(resultado)
} catch (error) {
    console.log("algo salio mal", error)
}