let consola = ['Playstation','xbox','Nintendo game cube','sega dreamcast','Game boy advanced','pokemon mini']

consola.push("Nintendo 64")
console.log(consola)


let indice = consola.indexOf("Game boy advanced")
consola.splice(indice,2)
console.log(consola)

const mostrar_funcion = () => {
    
    longitud = consola.length
    console.log(longitud)

    ultimo_elemento = consola[consola.length-1]

    console.log(`
    ultimo_elemento: ${ultimo_elemento} 
    `)

    cuarto_elemento = consola[consola.length-2]

    console.log(`
    cuarto_elemento: ${cuarto_elemento}
    `)

    consola.forEach( (element,index) => {

        console.log(`
            ${index} - ${element}
        `)
    
    });
    
}
    
function nose(){   

    let filas = []

    consola.forEach( (element,index) => {
        
        let tr = `
            <tr>
                <td>${index}</td>
                <td>${element}</td>
            </tr>
        `

        filas.push(tr)

    });


    document.getElementById("cuerpo_tabla").innerHTML = filas.join('')
}

boton = document.getElementById("btn_ejecutar").addEventListener("click",nose)