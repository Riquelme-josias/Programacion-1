function mostrar_resultado(){

    const dato = document.getElementById("inp_auto").value

    if(dato=="ford ka"){
        const fk = parseInt(1750000 - ( (5 * 1750000)/100 ))
        document.getElementById("h_titulo").textContent = fk
    }else{
        if(dato=="ford fiesta"){
            const b = (1950000 - ( (10 * 1950000)/100  ))
            document.getElementById("h_titulo").textContent = b
        }else{
            if(dato=="ford focus"){
                const c = (2560000 - ( (15 * 2560000)/100  ))
                document.getElementById("h_titulo").textContent = c
            }
        }
    }

}

