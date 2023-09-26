/*Estructura del condicional */
const flight=100;
const hotel=50;
const tour=30;
const total= flight+hotel+tour;
const budget='300';

if(budget>total){
    console.log('Si me voy de viaje');
} else if (budget===total){
    console.log('Si me puedo ir pero muy ajustado');
} else {
    console.log('No me puedo ir');
}

/* OPERADORES TERNARIOS */
 const result = budget > total ? console.log('Si me voy'):console.log('No me voy');
 //const newresult = budget > total ? tour=50:tour=20; //cambia el valor de tour
 //const newresult = budget > total ?50:20 //cambia el valor de newresult

const NUM="30"+3;

if (!isNaN(NUM)) {
    if (NUM%2==0) {
        console.log('Es un numero par');
    } else {
        console.log('Es un número impar');
    }
} else {
    console.log('No es un número');
}

/*Ejercicio*/
//Si es mas larga de 27 dejarla en 27 y si es menor añadir hasta que llegue a 27
const cade='En un lugar de la Mancha, de cuyo nombre';

if (cade.length>27) {
    console.log(cade.slice(1,28));
} else {
    for (i=0;i>=27;i++) {
        console.log(cade+i)
    }
}