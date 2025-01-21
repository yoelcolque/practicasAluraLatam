let arrayAmigos = [];

//--------------------------------------------------------------

// Función para agregar un amigo al array
function agregarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let amigoNombre = amigoInput.value.trim(); 

    if (validarCampoVacio(amigoNombre)) {
        arrayAmigos.push(amigoNombre); 
        limpiarCampo(amigoInput); 
        updateListAmigos(arrayAmigos); 
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

// Función para limpiar el campo de entrada
function limpiarCampo(campoAmigo) {
    campoAmigo.value = ""; 
}

// Validar si el campo está vacío
function validarCampoVacio(campo) {
    return campo !== ""; 
}

// Función para actualizar la lista de amigos en la interfaz
function updateListAmigos(arrayAmigos) {
    let seccionListaAmigos = document.getElementById("listaAmigos");
    seccionListaAmigos.innerHTML = "";

    // Iterar sobre el array y agregar cada amigo como <li>
    for (let i = 0; i < arrayAmigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = arrayAmigos[i]; 
        seccionListaAmigos.appendChild(li); 
    }
}

//-----------------------------------------------------------------

// Función para sortear Amigo de lista de amigos

function sortearAmigo() {
    // Validar si el array no está vacío
    if (arrayAmigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres a la lista.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = arrayAmigos[indiceAleatorio];

    // Mostrar resultado del amigo secreto
    let seccionListaAmigos = document.getElementById("listaAmigos");
    seccionListaAmigos.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    arrayAmigos = [];
}

