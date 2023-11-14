document.addEventListener("DOMContentLoaded",function(evento){
    const usuario=document.getElementById('uname');
    const clave=document.getElementById('pwd');
    const form=document.querySelector('form');

    form.addEventListener('submit', validarFormulario);

    usuario.addEventListener("keyup",function(e){
        console.log("ha cambiado");
        if(this.value){
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("Campo vacío");
        }
    })

    clave.addEventListener("keyup",function(e){
        console.log("ha cambiado");
        if (this.value.length >=6){
            this.setCustomValidity("");
        } else{
            this.setCustomValidity("La contraseña es demasiado pequeña");
        }
    })

    function validarFormulario(evento){
        evento.preventDefault()
        evento.stopPropagation()

        let valido=true;

        if (!usuario.value){
            usuario.setCustomValidity("Campo vacio");
            valido=false;
        } else {
            usuario.setCustomValidity("");
        }

        if(clave.value.length<6){
            clave.setCustomValidity("Menor de 6 caracteres");
            valido=false;
        } else {
            clave.setCustomValidity("");
        }

        this.classList.add('was-validated');

        if (valido) {
            this.submit();
        } else {
            usuario.setCustomValidity("");
        }

        function validate(inputID) {
            const input=document.getElementById(inputID);
            const validityState=input.validity;
            if (validityState.valueMissing) {
                input.setCustomValidity("No has introducido nada");
            } else if (validityState.rangeUnderflow) {
                input.setCustomValidity("Necesitamos un valor mas alto");
            } else if (validityState.rangeOverflow) {
                input.setCustomValidity("Necesitamos un valor mas bajo");
            } else {
                input.setCustomValidity("");
            }

            input.reportValidity();
        }


    }
    



})//Fin javascript