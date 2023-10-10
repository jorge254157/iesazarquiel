let contenido=document.querySelector(".cabecera.titulo");  //Para seleccionar el contenido de una clase
console.log(contenido);

//document.querySelector(".contenido").remove(); //Para borrar el contenido de la clase contenido

let parrafos=document.querySelectorAll("p");
console.log(parrafos)
//let matches=document.querySelectorAll("div.highlighted>p") 
//let matches=document.querySelectorAll("div.nota, div.alert") Busca todos los de la clase nota o alerta
let localizacion=document.location;
console.log(localizacion);
let titulo=document.title;
console.log(titulo);

let valor1=document.querySelector("#pie").innerText;
console.log(valor1);
let valor=document.querySelector("#pie").innerHTML;
console.log(valor);
let valor3=document.querySelector("#miboton").value;
console.log(valor3);