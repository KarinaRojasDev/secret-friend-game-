let nameFriends = [];

function agregarAmigo() {
    let titulo = document.querySelector('h1');
    titulo.textContent = 'Amigo Secreto';

    let seccion = document.querySelector('h2');
    if (seccion) {
        seccion.textContent = 'Digite el nombre de sus amigos';
    }

    let anadirNombre = document.getElementById('amigo');
    let nombre = anadirNombre.value.trim();

    if (nombre === "") {
        alert("Por favor inserte un nombre");
        return;
    }

    nameFriends.push(nombre);
    actualizarLista();
    anadirNombre.value = "";
}

function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; 

    nameFriends.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nameFriends.length === 0) {
        alert("La lista está vacía");
        return;
    }

    let aleatorio = Math.floor(Math.random() * nameFriends.length);
    let amigoSorteado = nameFriends[aleatorio];

    let elementoSorteo = document.getElementById('resultado');
    elementoSorteo.innerHTML = `<li>${amigoSorteado}</li>`;
}
