function mostrar(){

    const a = document.getElementById("inp_1").value
    const b = document.getElementById("inp_2").value

    const respuesta = calcular_hipotenusa(a,b)

    document.getElementById("h_titulo").textContent = respuesta

}

function calcular_hipotenusa(a,b){

    const dentro_raiz = Math.pow(a,2) + Math.pow(b,2)

    const resultado = Math.sqrt(dentro_raiz)

    return resultado

}



const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar)