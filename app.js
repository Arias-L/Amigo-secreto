let amigos = []; 


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        input.value = ""; 
        actualizarLista(); 
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
  
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para el sorteo.");
        return;
    }

    let mezclados = [...amigos].sort(() => Math.random() - 0.5); 
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; 

    for (let i = 0; i < mezclados.length; i++) {
        let amigo1 = mezclados[i];
        let amigo2 = mezclados[(i + 1) % mezclados.length]; 

        let li = document.createElement("li");
        li.textContent = `${amigo1} regala a ${amigo2}`;
        resultadoLista.appendChild(li);
    }
}


