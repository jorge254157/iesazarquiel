var numero=prompt("Dime un numero")
    function isNum(numero){
        return !isNaN(numero)
    }
    if (isNum(numero)) {
      console.log('Es un numero')
    } else {
      console.log('No es un numero')
    }
    if (numero%2==0) {
      console.log('El numero es par')
    } else {
      console.log('El numero es impar')
    }