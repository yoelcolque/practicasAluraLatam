// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo");
    validarCampoVacio(amigo);
    limpiarCampo(amigo);
}

function limpiarCampo(campoAmigo){
    campo.textContent("");
}

function validarCampoVacio(amigo){
    if (amigo != empy){
        arrayAmigos.push(amigo);
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

function sortearAmigo(){

}

