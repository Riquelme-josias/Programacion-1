function mostrar_resultado(){

    const a = document.getElementById("inp_a").value

    const respuesta = calcular_grado(a)
    document.getElementById("h_titulo").textContent = respuesta
}

function calcular_grado(a){

    const resultado = parseFloat(a * (1.8) ) + (32)
    
    return resultado
}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar_resultado)