function mostrar_resultado(){
    const dato = document.getElementById("inp_auto").value

    if(dato=="ford ka"){
        const a = parseInt(1750000 - ( (5 * 1750000)/100 ))
        alert("el precio con descuento es:" + a)
    }else{
        if(dato=="ford fiesta"){
            const b = (1950000 - ( (10 * 1950000)/100  ))
            console.log("el precio con descuento es:" + b)
        }else{
            if(dato=="ford focus"){
                const c = (2560000 - ( (15 * 2560000)/100  ))
                console.log("el precio con descuento es:"+ c)
            }
        }
    }

    document.getElementById("h_titulo").textContent

}

