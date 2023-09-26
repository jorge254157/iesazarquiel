var numero=prompt("Dime un numero")
    var numero1=1
    var cont=0
    if (numero>=0 && !isNaN(numero)) {
        while (cont<10) {
        console.log(numero1+ " x "+numero+" = "+numero*numero1)
        cont++
        numero1++
        }
    } else {
        alert('El numero es invalido')
    }