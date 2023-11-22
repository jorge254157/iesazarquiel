document.addEventListener("DOMContentLoaded",function(evento){
    const correo=document.getElementById("name");
    const clave=document.getElementById("psswd");
    const form=document.querySelector("form");
    clave.addEventListener("keyup", function(evento){
        clave.setCustomValidity("")
    })
    form.addEventListener("submit",function(evento){
        evento.preventDefault();
        evento.stopPropagation();
        clave.setCustomValidity("")
        getEmail(correo.value)
        .then((psswd) => {
            if(psswd == clave.value){
                console.log("son iguales")
                clave.style.border="3px solid green";
                window.open("blog.html");
            } else {
                console.log("intenta otra vez")
                clave.style.border="3px solid red";
                clave.setCustomValidity("Contraseña incorrecta")
            }
        }) 
    })
})


const getEmail= async (email) => {
    try{
        const getuser = await (await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)).json()
        if(getuser.length == 1){
            zipcode =getuser[0].address.zipcode
            return zipcode
        } else {
            return null
        }
    }
    catch (error){
        console.log(error)
    }
}