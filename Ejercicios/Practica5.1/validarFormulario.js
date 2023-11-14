window.addEventListener("load",function(){
    const formulario=document.querySelector("#formulario");
    const cp=document.querySelector("#codigoPostal");
    const nentero=document.querySelector("#entero");
    const nreal=document.querySelector("#real");
    const tlf=document.querySelector("#telefono");
    const tlfin=document.querySelector("#telefonoInternacional");
    const fech=document.querySelector("#fecha");
    const correo=document.querySelector("#email");
    const dni=document.querySelector("#dni");
    const url=document.querySelector("#url");
    const tarje=document.querySelector("#tarjetaCredito");
    const passwd=document.querySelector("#password");

    formulario.addEventListener("submit",evento=>{
        evento.preventDefault();
        evento.stopPropagation();
        let valido=true;
        if(!validacp(cp)){
            valido=false;
        }
        if(!validaNentero(nentero)){
            valido=false;
        }
        if(!validaNreal(nreal)){
            valido=false;
        }
        if(!validaTlf(tlf)){
            valido=false;
        }
        if(!validaTlfin(tlfin)){
            valido=false;
        }
        /*if(!validaFech(fech)){
            valido=false;
        }*/
        if(!validaCorreo(correo)){
            valido=false;
        }
        if(!validaDNI(dni)){
            valido=false;
        }
        if(!validaURL(url)){
            valido=false;
        }
        if(!validaTarjeta(tarje)){
            valido=false;
        }
        if(!validaPasswd(passwd)){
            valido=false;
        }
        if(valido){
            formulario.submit();
        }
    });

    function validacp(el) {
        const erCP=/^[0-5][0-9]{4}$/;
        const cpvalue=el.value.trim();
        if(cpvalue.match(erCP)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"El codigo postal no existe");
            return false;
        }
    }

    function validaNentero(el) {
        const erEntero=/^-?\d+$/;
        const Enterovalue=el.value.trim();
        if(Enterovalue.match(erEntero)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"No es un número entero");
            return false;
        }
    }

    function validaNreal(el) {
        const erReal=/^-?\d+(\.\d+)?$/;
        const Realvalue=el.value.trim();
        if(Realvalue.match(erReal)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"No es un número real");
            return false;
        }
    }

    function validaTlf(el) {
        const erTlf=/^(?:\+34|0034|34)?[6789]\d{8}$/;
        const Tlfvalue=el.value.trim();
        if(Tlfvalue.match(erTlf)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"No es un número de teléfono correcto");
            return false;
        }
    }

    function validaTlfin(el) {
        const erTlfin=/^\+(?:\d{1,3}[\s-]?)?(?:\d{1,14}[\s-]?)*\d{1,14}$/;
        const Tlfinvalue=el.value.trim();
        if(Tlfinvalue.match(erTlfin)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"No es un número de teléfono correcto");
            return false;
        }
    }

    /*function validaFech(el){
        if (!el.value){
            marcarError(el, "No has introducido fecha");
            return false;
        } else {
            marcarValido(el);
            return true;
        }
    }*/

    function validaCorreo(el) {
        const erCorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(erCorreo.test(el.value.trim())) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"El email no tiene formato valido");
            return false;
        }
    }

    function validaDNI(el) {
        const erDNI=/^[0-9]{8}[A-Z]$/;
        const DNIvalue=el.value.trim();
        if(DNIvalue.match(erDNI)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"El DNI introducido no es válido");
            return false;
        }
    }

    function validaURL(el) {
        const erURL=/^(http:\/\/|https:\/\/|www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\/[a-zA-Z0-9%_.-]+)*(\?[a-zA-Z0-9%_.-]+(=[a-zA-Z0-9%_.-]*)?)?$/;
        const URLvalue=el.value.trim();
        if(URLvalue.match(erURL)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"La URL no es correcta");
            return false;
        }
    }

    function validaTarjeta(el){
        const erTrajeta=/^(?:\d{16})$/;
        const Tarjetavalue=el.value.trim();
        if(Tarjetavalue.match(erTrajeta)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"Esta tarjeta no es válida");
            return false;
        }
    }

    function validaPasswd(el){
        const erPaaswd=/^.{8,}$/;
        const Passwdvalue=el.value.trim();
        if(Passwdvalue.match(erPaaswd)) {
            marcarValido(el);
            return true;
        } else {
            marcarError(el,"La contraseña tiene menos de 8 carácteres");
            return false;
        }
    }

    function marcarError(el,mensaje){
        el.parentNode.querySelector(".error-feedback").textContent=mensaje;
        el.parentNode.classList.add("error");
    }

    function marcarValido(el){
        el.parentNode.querySelector(".error-feedback").textContent="";
        el.parentNode.classList.add("remove");
    }

})