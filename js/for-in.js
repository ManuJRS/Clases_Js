let automovil = {
    modelo: "Camaro",
    motor: 6.1,
    anio: 1999,
    marca: "Cheverolet"
}

for (let key in automovil) {
    console.log(`${key}, ${automovil[key]}`)
}