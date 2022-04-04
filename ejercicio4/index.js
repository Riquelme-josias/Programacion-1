const calculo = () =>{

    const base1 =document.getElementById("inp_bm1").value
    const base2 = document.getElementById("inp_bm2").value
    const altura = document.getElementById("inp_a").value

    const resultado = ((parseInt(base1) + parseInt (base2))*altura)/2
    document.getElementById("h_titulo").textContent = resultado
}

const boton = document.getElementById("btn_mostrar")

boton = addEventListener("click", calculo)