$(document).ready(function() {
    const campoNome = document.querySelector("#nomeUsuario")
    campoNome.value = "James Bond"

    const campNome  = $("#nomeUsuario")
    campNome.val("Peter Park")


    document.querySelector("#btnLogar").addEventListener('click', function() {
        alert('O usuário fez o login')
    });

    $("#btnApagar").on('click', function() {
        alert('O usuário foi apagado')
    });

});