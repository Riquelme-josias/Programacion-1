const mostrar_resultado = () => {

    const j = document.getElementById("inp_1").value
    const k = document.getElementById("inp_2").value
    const l = document.getElementById("inp_3").value

    const respuesta = calcular_resultado(j,k,l)
    document.getElementById("h_titulo").textContent = respuesta


}


const calcular_resultado = (j,k,l) => {
    const sumatoria = parseInt(j)+parseInt(k)+parseInt(l)
    if (sumatoria <= 180){
        console.log("es valido")
    }else{
        console.log("no es valido")
    }

}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar_resultado)