// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nameFriends = [];

function agregarAmigo(){
    let titulo = document.querySelector('h1');
    titulo.textContent = 'Amigo Secreto';


    let seccion = document.querySelector('h2');
    if(seccion){
        seccion.textContent = 'Digite el nombre de sus amigos';
    }
    

    let anadirNombre = document.getElementById('amigo');
    let nombre = anadirNombre.value.trim();
    if(nombre === ""){
        alert("Por favor inserte un nombre");
        return;
    }else{
        nameFriends.push(nombre);
        actualizarLista();
        anadirNombre.value = "";
    }
}
function actualizarLista(){

    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "listaAmigos";

    nameFriends.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);

    });
}
