let historicos = document.getElementById('historicos');
let economicos = document.getElementById('economicos');
let culturales = document.getElementById('culturales');
let tecnologicos = document.getElementById('tecnologicos');

let consecuencias_efectos = document.getElementById('consecuencias_efectos');
let oportunidades = document.getElementById('oportunidades');
let analisis_demografico = document.getElementById('analisis_demografico');
let proyecciones_a_futuro = document.getElementById('proyecciones_a_futuro');
let posibles_soluciones = document.getElementById('posibles_soluciones');

function cargarInformacionPais(pais) {
    fetch('info.json') 
        .then(response => response.json()) 
        .then(data => {
            const paisData = data.paises.find(p => p.pais === pais); 

            if (!paisData) {
                document.getElementById('paisInfo').innerHTML = '<p>Información no disponible para este país.</p>';
                return;
            }

            let html = `<h2>Información sobre ${pais}</h2>`;
            html += `<img src="${paisData.foto}" alt="Imagen de ${pais}">`;

            if (historicos.checked) {
                html += `<h4>Históricos</h4><ul>`;
                paisData.factores.historicos.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (culturales.checked) {
                html += `<h4>Culturales</h4><ul>`;
                paisData.factores.culturales.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (tecnologicos.checked) {
                html += `<h4>Tecnológicos</h4><ul>`;
                paisData.factores.tecnologicos.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (economicos.checked) {
                html += `<h4>Económicos</h4><ul>`;
                paisData.factores.economicos.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }

            if (consecuencias_efectos.checked) {
                html += `<h3>Consecuencias y Efectos</h3><ul>`;
                paisData.consecuencias_efectos.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (oportunidades.checked) {
                html += `<h3>Oportunidades</h3><ul>`;
                paisData.oportunidades.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (analisis_demografico.checked) {
                html += `<h3>Análisis Demográfico</h3><ul>`;
                paisData.analisis_demografico.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (proyecciones_a_futuro.checked) {
                html += `<h3>Proyecciones a Futuro</h3><ul>`;
                paisData.proyecciones_a_futuro.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }
            if (posibles_soluciones.checked) {
                html += `<h3>Posibles Soluciones</h3><ul>`;
                paisData.posibles_soluciones.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
            }

            document.getElementById('paisInfo').innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            document.getElementById('paisInfo').innerHTML = '<p>No se pudo cargar la información.</p>';
        });
}

function actualizarInformacion() {
    const paisSeleccionado = document.getElementById('paisSelect').value;
    cargarInformacionPais(paisSeleccionado);
}
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', actualizarInformacion);
});
document.getElementById('paisSelect').addEventListener('change', actualizarInformacion);

const url = new URL(window.location.href);
const parametros = new URLSearchParams(url.search);
const pais = parametros.get('pais'); 

if (pais) {
    document.getElementById('paisSelect').value = pais;
    cargarInformacionPais(pais);
} else {
    actualizarInformacion();
}
