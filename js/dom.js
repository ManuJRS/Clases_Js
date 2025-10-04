/*
dom hace referencia a document objetc model, sirve para que nosotros podamos modificar etiquetas, atributos, clases ya sea agregarlas igual para seleccionar IDs
*/

/*console.log(window)
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.title)
console.log(document.links)
let caja = document.links;
console.log(typeof caja);
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)

setTimeout(() => {
    console.log(document.getSelection().toString())
}, 5000);*/

/* console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementById("que-es"))
console.log(document.querySelector("#que-es"))
console.log(document.querySelector("a"))
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)

document.querySelectorAll("a").forEach((one) => {
    console.log(one)
})

/*document.writeln("<h2>Estoy escribiendo en el dom</h2>")*/

/*console.log(document.querySelectorAll("#menu li"))

let two = document.querySelector("h1")
console.log(typeof two)

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang = "es"
console.log(document.documentElement.lang)

document.documentElement.setAttribute("lang", "es-mx")
console.log(document.documentElement.lang)

const $linkDom = document.querySelector(".link-dom")
$linkDom.setAttribute("target", "_blank")

console.log($linkDom.hasAttribute("target"))

console.log($linkDom.getAttribute("data-dom"))

$linkDom.setAttribute("href", "https://www.anipedia.net/perros/");
console.log($linkDom.getAttribute("data-dom"))

console.log($linkDom.dataset)
$linkDom.setAttribute("data-dom", "texto nuevo")
console.log($linkDom.getAttribute("data-dom"))

$linkDom.dataset.pais = "hola mundo"*/

/*const caja = document.getElementById("micaja")
const estilos = getComputedStyle(caja)
console.log(estilos.color)
console.log(estilos.fontSize)
console.log(estilos.paddingTop)
*/

const $linkDom = document.querySelector(".link-dom");
console.log($linkDom.style)
console.log($linkDom.getAttribute("style"))
console.log($linkDom.style.backgroundColor)
console.log(window.getComputedStyle($linkDom))
console.log(getComputedStyle($linkDom).getPropertyValue("color"))
