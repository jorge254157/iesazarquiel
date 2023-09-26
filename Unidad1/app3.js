//typeof
const num=20;
console.log("El tipo es: "+typeof num);
//NaN
const variable=4*"hola";
console.log(variable);
console.log("El tipo de variable es: "+variable);
//Infinity
const division=4/0;
console.log(division);
console.log("El tipo de division es: "+typeof division);
//isNaN
const numberstring="30";
const string="20 años";
console.log(isNaN(variable));
console.log(isNaN(division));
console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string));
console.log(isNaN(NaN));
//toString //para pasar un numero a cadena de caracteres
const number=100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());
//toFixed //para añadir decimales a un numero
console.log(number.toFixed(3))

//Realizar un script que calcule cuanto toca pagar a cada persona
// de una cena que cuesta 102€ y asistieron 6 personas

const precio=102;
const personas=6;

let preciopersona=102/6;

console.log("El precio por persona es de "+preciopersona.toFixed(2)+" €");

//Funcion Boolean devuelve verdadero
console.log(Boolean(200)); //Devolverá verdadero si le paso un numero mayor o igual que 1
console.log(Boolean("Cosa")); //o una cadena
console.log(Boolean(3.14)); //o si le paso un numero float
console.log(Boolean(100>5)); //o con expresiones de esta forma
console.log('1'==1);
//Funcion Boolean devuleve falso
console.log(Boolean(200)); //Devolverá verdadero si le paso un numero menor o igual que 0
console.log(Boolean("")); //o una cadena vacía
console.log(Boolean(NaN)); //o si le paso un NaN
console.log(Boolean(null)); //o con expresiones de esta forma
console.log('1'===1);
console.log(Boolean(undefined));