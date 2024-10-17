const tareas = [{
    id: 1,
    descripcion: "Revisar fichas",
    completada: false,
},
{
    id: 2,
    descripcion: "Cambiar precios",
    completada: true,
},
{
    id: 3,
    descripcion: "Medir aceite",
    completada: false,
}];

const muestraTareas = document.getElementById('muestraTareas');
const nuevaTarea = document.getElementById('nuevaTarea');
const botonAgregar = document.getElementById("botonAgregar");
const total = document.getElementById("total");
const realizados = document.getElementById("realizados");
let htmlTabla = ``;

function agregarTarea(tarea) {
    let ultimoId = (tareas.length > 0) ? tareas[tareas.length - 1].id : 0;
    tareas.push({ id: ultimoId + 1, descripcion: tarea, completada: false });
    htmlTabla = ``;
    actualizarTabla();
}

function eliminarTarea(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1);
    htmlTabla = ``;
    actualizarTabla();
}

function cambiaEstado(id) {
    for (let tarea of tareas) {
        if (tarea.id === id && tarea.completada) {
            tarea.completada = false;
        } else if (tarea.id === id && !tarea.completada) {
            tarea.completada = true;
        }
    }
    htmlTabla = ``;
    actualizarTabla();
}

function actualizarTabla() {
    let completadas = 0;
    for (let tarea of tareas) {
        let color;
        let checked;
        if (tarea.completada) {
            color = "table-success";
            checked = "checked";
            completadas++;
        } else {
            color = "table-danger";
        }
        htmlTabla += ` <tr class="${color}">
                        <td>${tarea.id}</td>
                        <td>${tarea.descripcion}</td>
                        <td><input type="checkbox" id="tarea_${tarea.id}" onChange="cambiaEstado(${tarea.id})" name="tarea_${tarea.id}" ${checked}></td>
                        <td><a href="#" onCLick="eliminarTarea(${tarea.id})"><i class="fa-solid fa-x"></i></a></td>
                    </tr>`;
    }
    realizados.innerHTML = completadas
    total.innerHTML = tareas.length;
    muestraTareas.innerHTML = htmlTabla;

}
actualizarTabla();
botonAgregar.addEventListener("click", function () {
    if (nuevaTarea.value === "") {
        alert("el campo no debe estar vacio")
    } else {
        agregarTarea(nuevaTarea.value);
        nuevaTarea.value = "";
    }
})