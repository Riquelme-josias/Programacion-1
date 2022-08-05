let librerias_css = ['Bootstrap','materialize','Bulma','Tailwind','Pure','Pico CSS','Skeleton','Primer']

librerias_css.unshift("Spectre")
console.log(librerias_css)

let indice = librerias_css.indexOf("Pure")
librerias_css.splice(indice,2)
console.log(librerias_css)

librerias_css.push("Milligram")
console.log(librerias_css)

function mostrar(){

    const longitud = librerias_css.length
    document.getElementById("h_titulo1").textContent = longitud

    const ultimo_elemento = librerias_css[librerias_css.length-1]
    document.getElementById("h_titulo2").textContent = ultimo_elemento

    const indice = librerias_css.indexOf("Bulma")
    document.getElementById("h_titulo3").textContent = librerias_css[indice]

}
boton = document.getElementById("btn_mostrar").addEventListener("click",mostrar)
function arreglo (){


    let lista =[]
    librerias_css.forEach(element => {
        let li = `
        <li class="list-group-item">${element}</li>
        `
        lista.push(li)
    }); 

    document.getElementById("mostrar").innerHTML= lista.join('')
}



