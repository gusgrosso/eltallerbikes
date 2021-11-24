
$("#validarNombre").change((e) => {
    if (e.target.value.lenght < 2) {
        $("#validarnombre").addClass("errorValidacion");
    }
    else {
        $("#validarnombre").removeClass("errorValidacion");
    }
}
)







/*
$("#formulario").submit(function (e) {
    e.preventDefault();
    if ($("#validarNombre" === "")) {
        alert("Debe completar Obligatoriamente un nombre");
    }
    else if ($("#validarMail" === "")) {
        alert("Debe completar Obligatoriamente un mail");
    }
    return true;
})
*/





/*

    if ($("#validarNombre" == "")) {
        alert("Debe completar Obligatoriamente un nombre");
        return false;
    }
    if ($("#validarMail" == "")) {
        alert("Debe completar Obligatoriamente un mail");
        return false;
    }
    return true;
})
*/

