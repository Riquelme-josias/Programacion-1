const mostrar_resultado = () =>{

    const temp = document.getElementById("inp_1").value

    const respuesta = calcular_resultado(temp)

    document.getElementById("h_titulo").textContent = respuesta
    
} 


const calcular_resultado = (temp) =>{

    let mensaje  = null

    if(temp>14 && temp<=32){
       mensaje = "temperatura baja"
    }else{
        if(temp>32 && temp<=68){
            mensaje = "temperatura adecuada"
        }else{
            if(temp>68 && temp<=96){
                mensaje = "temperatura alta"
            }else{
                mensaje = "temperatura desconocida"
            }
        }
    }
    
    return mensaje
}

const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", mostrar_resultado)