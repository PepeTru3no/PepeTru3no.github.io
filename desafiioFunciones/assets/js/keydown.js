var color = "white";
let body = document.querySelector("body");
body.style.display="flex";
body.style.flexWrap="wrap";
let divKey = document.getElementById("key");
divKey.style.width = "200px";
divKey.style.height = "200px";
divKey.style.border = "3px solid black"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = "pink";
        cambiaColor(color);
    } else if (event.key === 's' || event.key === 'S') {
        color = "orange";
        cambiaColor(color);
    } else if (event.key === 'd' || event.key === 'D') {
        color = "#b2ffff";
        cambiaColor(color);
    } else if (event.key === 'q' || event.key === 'Q') {
        color = "#a349a4"
        crearDiv(color);
    } else if (event.key === 'w' || event.key === 'W') {
        color = "# 808080";
        crearDiv(color);
    } else if (event.key === 'e' || event.key === 'E') {
        color = "#a18262";
        crearDiv(color);
    }
});

function cambiaColor(color) {
    divKey.style.backgroundColor = color;
}

function crearDiv(color) {
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor = color;
    nuevoElemento.style.width = "200px";
    nuevoElemento.style.height = "200px";
    nuevoElemento.style.border = "3px solid black"
    body.appendChild(nuevoElemento);
}