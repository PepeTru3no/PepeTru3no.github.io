const api = "https://mindicador.cl/api/";
const dropTipo = document.getElementById('dropTipo');
const btnBuscar = document.getElementById('btnBuscar');
const montoClp = document.getElementById('montoClp');
const divResultado = document.getElementById('resultado');
const divGrafico = document.getElementById('divGrafico');

async function getApi(endpoint = "") {
    try {
        const res = await fetch(api + endpoint)
        const data = await res.json()
        return data;
    } catch (e) {
        alert(`El servicio no esta disponible. Error: ${e.message}`)
        location.reload();
    }
}

async function getTipoMonedas() {
    const data = await getApi();
    html = `<option value="0">Seleccione Moneda...</option>`;
    for (let i in data) {
        if (data[i].nombre)
            html += `<option value="${data[i].codigo}">${data[i].nombre}</option>`;
    }
    dropTipo.innerHTML = html;
}

async function getResultado() {
    if (dropTipo.value != 0 && montoClp.value != 0) {
        const data = await getApi(dropTipo.value);
        html = `<h3>Resultado: <i class="fa-solid fa-${dropTipo.value}-sign"></i> </h3>`;
        resultado = (montoClp.value / data.serie[0].valor).toFixed(2);
        html += `<h4>${resultado}.-  ${data.nombre}</h4>`;
        html += `<p>Valor de cambio: $ ${data.serie[0].valor}.- ${data.unidad_medida}</p>`;
        divResultado.innerHTML = html;
    } else {
        alert("Debe seleccionar una moneda o no agrego una cantidad.")
    }
}

async function getAndCreateDataToChart(moneda = "") {
    const dataApi = await getApi(moneda)
    const labels = dataApi['serie'].map((s) => {
        return s.fecha.slice(0, 10);
    });
    const data = dataApi.serie.map((s) => {
        return Number(s.valor);
    });
    const datasets = [
        {
            label: dataApi.nombre,
            borderColor: "rgb(255, 99, 132)",
            data
        }
    ];
    return { labels, datasets };
}

async function renderGrafica(moneda = "") {
    const data = await getAndCreateDataToChart(moneda);
    const config = {
        type: "line",
        data
    };
    if (!document.getElementById('grafico')) {
        const newCanvas = document.createElement('canvas');
        newCanvas.id = 'grafico'
        divGrafico.appendChild(newCanvas);
    } else {
        divGrafico.removeChild(document.getElementById('grafico'));
        const newCanvas = document.createElement('canvas');
        newCanvas.id = 'grafico'
        divGrafico.appendChild(newCanvas);
    }
    const myChart = document.getElementById('grafico');
    myChart.style.backgroundColor = "white";
    new Chart(myChart, config);
}


btnBuscar.addEventListener('click', function () {
    getResultado();
    renderGrafica(dropTipo.value);
});
getTipoMonedas();