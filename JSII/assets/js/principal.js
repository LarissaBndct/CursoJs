$(document).ready(function() {
    const campoNome = document.querySelector("#nomeUsuario")
    campoNome.value = "James Bond"

    const campNome  = $("#nomeUsuario")
    campNome.val("Peter Park")


    document.querySelector("#btnLogar").addEventListener('click', function() {
        alert('O usuário fez o login')
    });

    $("#btnApagar").on('click', function() {
        // $("#nomeUsuario").val('').focus()
        // $("#senha").val('')
        document.getElementById("nomeUsuario").value = ""
        document.getElementById("senha").value = ""
        document.getElementById("nomeUsuario").focus()
    });

    $("#btnMensagem").on('click', () => {
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", "https://catfact.ninja/fact", false ); // false for synchronous request
        // xmlHttp.send( null );

        // const resposta = JSON.parse(xmlHttp.responseText);

        $.get("https://catfact.ninja/fact", (data) => {
            $("#frase").text(data.fact)
        });

    });
});