

let nombreOk = false;
let mailOk = false;

function enviarFormulario (){
    let mensajeError = [];
    if ($("#nombre").val() === null || $("#nombre").val() === "") {
        mensajeError.push("Falta ingresar tu nombre");
    }
    else{
        nombreOk = true;
    }

    if ($("#mail").val() === null || $("#mail").val() === "") {
        mensajeError.push("Falta ingresar tu mail");
    }
    else{
        mailOk = true;
    }
    $("#error").append(mensajeError.join(", "));
    if (nombreOk && mailOk){
        $("#error").append('<p class="envioCorrecto"> Formulario enviado con éxito </p>');
    }
    return false;
}

