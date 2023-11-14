function pintarTareas(){
    var value = document.getElementById('input').value;
    console.log(value)
    if(value!=""){
      var div = document.createElement("div");
      var p =document.createElement("p")
      var h3 =document.createElement("h3")
      var i1=document.createElement("i")
      var i2=document.createElement("i")
      var t = document.createTextNode(value);
      div.className="alert alert-warning d-flex justify-content-between align-items-center";
      p.className="m-0";
      h3.className="m-0 esp";
      i2.className="fas fa-check-circle";
      i1.className="fas fa-times-circle";
      i2.setAttribute("role","button");
      i1.setAttribute("role","button");
      div.appendChild(p);
      div.appendChild(h3);
    
      p.appendChild(t);
      h3.appendChild(i2);
      h3.appendChild(i1);
      i2.addEventListener("click", function prueba(e){
        e.defaultPrevented;
        const nodo = e.target;
        const padre =nodo.parentNode
        const div=padre.parentNode
        div.className="alert alert-warning d-flex justify-content-between align-items-center fondo"
        console.log("si")
      })
      i1.addEventListener("click", function prueba(e){
        e.defaultPrevented;
        const nodo = e.target;
        const padre =nodo.parentNode
        const div=padre.parentNode
        const divMaestro=div.parentNode
        divMaestro.removeChild(div)
      })
      document.getElementById("lista-tareas").appendChild(div);
      console.log("adios")
    } else {
      console.log("hola")
    }
    return false;
  }