const valor = prompt("ingrese calificacion")

const calificacion = (valor>=7)? 'aprobado': 'desaprobado'

//template string
console.log(`
    tu calificacion en el taller
    de programacion 1 es: ${calificacion}
`);