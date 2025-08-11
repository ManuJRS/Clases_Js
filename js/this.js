let persona = {
    nombre: "Manuel",
    edad: 30,
    redesSociales: ["Github", "Instagram", "Facebook"],
    amigos: {
        prepa: "Oscar",
        Trabajo: "Josh",
        Secundaria: "pepe"
    },
    saludar() {
        console.log(`Mi nombre es ${this.nombre}`)
    },
    imprimir() {
        console.log(`mis amigos son ${this.amigos.Secundaria} y ${this.amigos.prepa} y les escribo por ${this.redesSociales[1]}`)
    }
}

persona.imprimir()
persona.saludar()