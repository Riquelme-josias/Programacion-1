function calcular_potencia()
{

    const dato1 = document.querySelector("#inp_dato1").value
    
    const dato2 = document.querySelector("#inp_dato2").value

    const potencia = dato1 * dato2

    return potencia

}

function respuesta()
{

    const mostrar = calcular_potencia()
    
    alert(mostrar)

}