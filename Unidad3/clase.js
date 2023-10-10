//Crear un array de objeto de clase persona
//Añadir dos atributos que son poblacion y estudios
//Añadir los metodos para obtener cada uno de los atributos
//Hacer un bucle con una funcion flecha para obtener dos atributos(a elegir)

class Persona{
    constructor (nombre,apellidos,anno,poblacion,estudios) {
        this._nombre=nombre;
        this._apellido=apellidos;
        this._year=anno;
        this._poblacion=poblacion;
        this._estudios=estudios;
    }
    get annoNacimiento() {
        return this._year;
    }
    get poblacion() {
        return this._poblacion;
    }
    get estudios() {
        return this._estudios;
    }
}

const p1=new Persona("Jose","Garcia","1999","Toledo","ESO");
const p2=new Persona("Jorge","Medina","2002","Añover","ESO")

const Persona=(lista)=>{
    let contador=0;
    lista.forEach(elemento =>{
        console.log(elemento.estudios());
        console.log(elemento.poblacion());
        contador+=1;
    })
    return contador;
}

