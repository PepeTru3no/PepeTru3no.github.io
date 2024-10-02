/* seccion de cambio borde de imagen */
let imagen = document.querySelector('.imagen');
imagen.addEventListener("click", cambiaBorde);

function cambiaBorde() {
    let borde = imagen.style.borderColor;
    if (borde == "red") {
        imagen.style.border = "0px";
    } else {
        imagen.style.border = "4px solid red";
    }

}

/* seccion de sticker */

let botonSticker = document.querySelector('.botonSticker');

botonSticker.addEventListener('click', function () {
    let sticker1 = document.getElementById("sticker1");
    let sticker2 = document.getElementById("sticker2");
    let sticker3 = document.getElementById("sticker3");
    let total = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
    let texto = document.querySelector(".texto");
    if (total < 10) {
        texto.innerHTML = "Lleva " + total + " sticker.";
    } else {
        texto.innerHTML = "Lleva demasiados stickers";
    }
});

/* seccion de password */
const pass = 911;
const otroPass = 714;
let btnComprobar = document.querySelector(".btnComprobar");
let parrafo = document.querySelector(".validacion");

btnComprobar.addEventListener('click', function () {
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let pass3 = document.getElementById("pass3");
    let passIngresado = Number(pass1.value + pass2.value + pass3.value);

    if (passIngresado === pass) {
        parrafo.innerHTML="Password 1 correcto";
        parrafo.style.color= "green";
    } else if (passIngresado === otroPass) {
        parrafo.innerHTML="Password 2 correcto";
        parrafo.style.color= "green";
    } else {
        parrafo.innerHTML="Password incorrecto";
        parrafo.style.color= "red";
    }
});