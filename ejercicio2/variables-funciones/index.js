//funcion clasica
function mostrar(){
    
    //forma 1
    // const nombres = document.querySelector("#inp_nombres").value
    //forma 2
    const nombres = documoent.querySelector("#inp_nombres").value;

    //sin template string
    //const mensaje = 'nombre y apellido:  ' +nombres 

    //sin template string
    const mensaje = 'nombre y apellido:  ${nombres} - DNI 48258963'
    
    alert(mensaje)

}

function mifuncion_con_retorno()
{
    const ejemplo = 'probando funcion con retorno'

    return ejemplo
}

function mostrar_respuesta()
{
    //acabo de ejecutar la funcion
    const respuesta = mifuncion_con_retorno()
    alert(respuesta)

}