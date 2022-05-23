const miobjeto = {

    nombre: 'juan',
    apellido: 'perez',
    dni: '44041651',
    correo: {
    
        Gmail: 'jp@gmail.com',
        outLook: 'jp@butlook.com',
        yahoo: 'jpyahoo'

    }
}

console.log(miobjeto.apellido)

//como mostrar mis correos
//const gmail = miobjeto.correo.Gmail;
//const outLook = miobjeto.correo.outLook;
//const yahoo = miobjeto.correo.yahoo;

//destructuring object
    const { Gmail, outLook, yahoo } = miobjeto.correo;


console.log(`

    correos:

    gmail: ${Gmail}
    outLook: ${outLook}
    yahoo: ${yahoo}

`)