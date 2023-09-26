var NOMBRE=prompt('Dime tu nombre')
    var CURSO=prompt('Dime tu curso')
    var LOCALIDAD=prompt('Dime tu localidad')
    var FECHA_INICIO=prompt('Dime la fecha de inicio')
    var FECHA_FIN=prompt('Dime la fecha en la que acaba')

    console.log("Estimado " +NOMBRE.trim()+","+
        "Bienvenido al curso de "+CURSO.trim()+
        " que se celebrará en la localidad de "+LOCALIDAD.trim()+" entre las fechas "+FECHA_INICIO.trim()+
        " y "+FECHA_FIN.trim()+
        "Espero que el curso se desarrolle según sus expectativas. Estaremos encantados de atenderle. "+
        "Atentamente,"+ 
        "La dirección")