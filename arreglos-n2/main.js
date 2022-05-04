function numeros(){

    let n = [5,2,88,14,22,7,6,42,47,34]
   
    let suma = 0

    let longitud = n.length

    n.forEach(function(element)  {
 
        suma += element
  
    });

    let promedio = suma/longitud
    console.log(promedio)


}

function calcular_prom(){

    let n = [5,2,88,14,22,7,6,42,47,34]

    let suma = 0
    const rango = n.slice(1,4)

    let longitud = rango.length

    rango.forEach(function(element){

        suma += element

    });

    let promedio = suma/longitud 
    console.log(promedio)



}