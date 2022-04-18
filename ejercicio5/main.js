const calcular_raices = (a,b,c) =>{

    const dentro_raiz = Math.pow(b,2) - (4*a*c)

    const resultado1 = ( parseInt(-b) + Math.sqrt(dentro_raiz) ) / (2*a)
    const resultado2 = ( parseInt(-b) - Math.sqrt(dentro_raiz) ) / (2*a)

    return 'raiz1=' + resultado1 + 'raiz2=' + resultado2 
    
}


const mostrar_resultado = () =>{


    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value

    const respuesta  = calcular_raices(a,b,c)

    document.getElementById("h_titulo").textContent = respuesta
}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar_resultado)