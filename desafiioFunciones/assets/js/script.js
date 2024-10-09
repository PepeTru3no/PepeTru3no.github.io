/* function pinta_negro(){
    let body= document.querySelector("body");
    body.style.backgroundColor="green";
}
pinta_negro(); */

pintar= function(color){
    let body= document.querySelector("body");
    body.style.backgroundColor=color;
}

pintar("yellow");


document.addEventListener("keydown", function(event){

    if(event.key === "a" || event.key === "A") {
        agregarElemento();
    }else if(event.key === "d" || event.key === "D"){
        eliminarElemento();
    }
});

function eliminarElemento(){
    contenedor= document.getElementById("contenedor");
    elementos=contenedor.querySelectorAll("div");
    if(elementos.length > 0){
        contenedor.removeChild(elementos[elementos.length -1]);
    }
}

function agregarElemento(){
    contenedor = document.getElementById("contenedor");
    nuevoElemento= document.createElement("div");
    nuevoElemento.textContent="elemento agregado";
    contenedor.appendChild(nuevoElemento);
}