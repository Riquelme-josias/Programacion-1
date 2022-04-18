//inicio de un arreglo
let autos = ["ford","renault","volkswagen","sear","peugeot","chevrolet","fiat","toyota","chevy"]

//mostrar la longitud
console.log(`
    longitud = ${autos.length};
`)

//accede al ultimo elemento del arreglo mediante su indice
let ultimo_elemento = autos[autos.length-1]
console.log(`
ultimo elemento: ${ultimo_elemento}
`)

//recorre un arreglo haciendo uso del "forEach"
autos.forEach( (element,index) => {

    console.log(`
        ${index} - ${element}
    `)

});


//agrega un eleento al final del arreglo
autos.push("mclaren")
console.log(autos)

//como eliminar el ultimo elemento de un arreglo
autos.pop()
console.log(autos)

//como agregar un elemento al inicio de u arreglo
autos.unshift("lamborgini")
console.log(autos)

//elimina el primer elemento de un array
autos.shift()
console.log(autos)

//como encontrar los indices de un elemento en un array
let indice = autos.indexOf("volkswagen")
console.log(`
    posicion del elemento auto  - %{indice}
`)

//eliminar un elemento segun su indice
autos.splice(indice,2)
console.log(autos)

//eliminar varios elementos de un arreglo
autos.splice(0,3)
console.log(autos)

//copiar un elemento
autos.push("bugatti")

//comoclonar un arreglo
autos.slice("bugatti")
let copia = autos.slice()

copia.push("bugatti 5.0")


console.log(copia)
console.log(autos)
