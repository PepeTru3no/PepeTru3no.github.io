let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = document.querySelector(".cantidad");
let valorTotalSpan = document.querySelector(".valor-total");
let botonMas = document.querySelector('.botonMas');
let botonMenos = document.querySelector('.botonMenos');

botonMas.addEventListener('click', btnMas);
botonMenos.addEventListener('click', btnMenos);

function btnMas() {
	cant = Number(cantidad.innerHTML) + 1;
	total = precio * cant;
	valorTotalSpan.innerHTML = total;
	cantidad.innerHTML = cant;
}

function btnMenos() {
	if (Number(cantidad.innerHTML) > 0) {
		cant = Number(cantidad.innerHTML) - 1;
		total = precio * cant;
		valorTotalSpan.innerHTML = total;
		cantidad.innerHTML = cant;
	} else {
		alert("La cantidad no puede ser menor a 0");
	}
}
