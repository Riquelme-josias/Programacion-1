
let lenguajes = ["Python","javaScript","Csharp","C++","Java","Php","Ruby"]

function imprimir_arreglo(){

    //muestra la longitud del arreglo
    const longitud=lenguajes.length
    console.log(longitud)

    //muestra el ultimo elemento del arreglo
    let ultimo_elemento = lenguajes[lenguajes.length-1]
    console.log(`
    ultimo_elemento ${ultimo_elemento} 
    `)

    //muestra el tercer elemento de un arreglo
    let tercer_elemento = lenguajes[lenguajes.length-2]
    console.log(`
    tercer_elemento ${tercer_elemento}
    `)

    //recorrido del arreglo
    lenguajes.forEach((element, index) => {

        console.log(`
        ${element} - ${index}
        `)
        
    });

    //agrego el elemento Go al final del areglo
    lenguajes.push("Go")
    console.log(lenguajes)

    //elimina el primer elemento del arreglo lenguajes 
    lenguajes.shift()
    console.log(lenguajes)

    //agrega al inicio de un arreglo el elemento "kotlin"
    lenguajes.unshift("kotlin")
    console.log(lenguajes)

    //elimina un elemento segun su indice
    let indice = lenguajes.indexOf("Java")
    lenguajes.splice(indice,2)
    console.log(lenguajes)

    //imprime el arreglo con todos sus elementos
    console.log(lenguajes)



}
