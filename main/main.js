document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el mapa
    const map = L.map('map').setView([-34.6383541, -58.5655214], 20)
    L.marker([-34.6383541, -58.5655214]).addTo(map)
        .bindPopup("<b>Usted está aquí</b>")
        .openPopup();

    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    function updateMap(location) {
        map.setView(location.coords, location.zoom);

        // Limpiar los marcadores existentes antes de añadir uno nuevo
        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Agrega el marcador dependiendo de la universidad seleccionada
        L.marker(location.coords).addTo(map)
            .bindPopup(getPopupContent(location))
            .openPopup();
    }
    // Definir ubicaciones
    const locations = {
        option1: { coords: [-34.66744, -58.56639], zoom: 16 }, // UNLaM
        option2: { coords: [-34.6593423, -58.4678708], zoom: 16 }, // UTN BA
        option3: { coords: [-34.6170301, -58.3820639], zoom: 18 },  // UADE
        option4: { coords: [-34.5827036, -58.3916259], zoom: 18 },  // UBA Facu 
        option5: { coords: [-34.593560, -58.3830825], zoom: 18 }, // AUSTRAL
        option6: { coords: [-34.646700, -58.620134], zoom: 18 }, // MORON
        option7: { coords: [-34.6165043, -58.6342448], zoom: 18 }, // sede1
        option8: { coords: [-34.665021, -58.699388], zoom: 18 }, // DEL OESTE
        option9: { coords: [-34.6488381, -58.6574235], zoom: 18 }, // sede1
        option10: { coords: [-34.6558833, -58.6747121], zoom: 18 }, // sede2
        option11: { coords: [-34.6559982, -58.6716886], zoom: 18 }, // sede2
        option12: { coords: [-34.659226, -58.661735], zoom: 18 }, // sede3
        option13: { coords: [-34.617639, -58.367945], zoom: 18 }, // UBA ING
        option14: { coords: [-34.541245, -58.443980], zoom: 18 }, // UBA Arc
        option15: { coords: [-34.600316, -58.397934], zoom: 18 }, // UBA Eco
        option16: { coords: [-34.543818, -58.440396], zoom: 18 }, // UBA Bio
        option17: { coords: [-31.43760, -64.18977], zoom: 16 }, // UNC Córdoba
        option18: { coords: [-28.458486, -65.783504], zoom: 16 }, // UNCACatamarca
        option19: { coords: [-28.191778, -56.122383], zoom: 16 }, // USAL Corrientes
        option20: { coords: [-27.451138, -58.978997], zoom: 16 }, // UTN Chaco
        option21: { coords: [-26.801198, -60.446855], zoom: 16 }, // UNCAUS Chaco
        option22: { coords: [-43.249942, -65.308112], zoom: 16 }, // UNP Chubut
        option23: { coords: [-31.397342, -58.015819], zoom: 16 }, // UADER Entre Ríos
        option24: { coords: [-24.179221, -65.324675], zoom: 16 }, // UNJU Jujuy
        option25: { coords: [-36.620384, -64.289433], zoom: 16 }, // UNLPAM La Pampa
        option26: { coords: [-29.430534, -66.870593], zoom: 16 }, // UNLAR La Rioja
        option27: { coords: [-27.485521, -55.110394], zoom: 16 }, // UNAM Misiones
    };

    // Función para actualizar la vista del mapa y el marcador
    function getPopupContent(location) {
        switch (location) {
            case locations.option1:
                return "<a href='https://www.unlam.edu.ar/' target='_blank'><b>Universidad Nacional de la Matanza (UNLAM)</b></a>";
            case locations.option2:
                return "<a href='https://www.utn.edu.ar/' target='_blank'><b>Universidad Tecnológica Nacional (UTN)</b></a>";
            case locations.option3:
                return "<a href='https://www.uade.edu.ar/' target='_blank'><b>Universidad Argentina de la Empresa (UADE)</b></a>";
            case locations.option4:
                return "<a href='https://www.uba.ar/' target='_blank'><b>Universidad de Buenos Aires</b></a>";
            case locations.option5:
                return "<a href='https://www.austral.edu.ar/' target='_blank'><b>Universidad Austral</b></a>";
            case locations.option6:
                return "<a href='https://www.unimoron.edu.ar/' target='_blank'><b>Universidad de Moron</b></a>";
            case locations.option7:
                return "<a href='https://unahur.edu.ar/' target='_blank'><b>Universidad Nacional de Hurlingham - Sede 1</b></a>";
            case locations.option8:
                return "<a href='https://www.uno.edu.ar/' target='_blank'><b>Universidad Nacional del Oeste</b></a>";
            case locations.option9:
                return "<a href='https://uai.edu.ar/' target='_blank'><b>Universidad Abierta Interamericana - Sede 1</b></a>";
            case locations.option10:
                return "<a href='https://unahur.edu.ar/' target='_blank'><b>Universidad Nacional de Hurlingham - Sede 2</b></a>";
            case locations.option11:
                return "<a href='https://uai.edu.ar/' target='_blank'><b>Universidad Abierta Interamericana - Sede 2</b></a>";
            case locations.option12:
                return "<a href='https://uai.edu.ar/' target='_blank'><b>Universidad Abierta Interamericana - Sede 3</b></a>";
            case locations.option13:
                return "<a href='https://www.uba.ar/' target='_blank'><b>Universidad de Buenos Aires</b></a>";
            case locations.option14:
                return "<a href='https://www.uba.ar/' target='_blank'><b>Universidad de Buenos Aires</b></a>";
            case locations.option15:
                return "<a href='https://www.uba.ar/' target='_blank'><b>Universidad de Buenos Aires</b></a>";
            case locations.option16:
                return "<a href='https://www.uba.ar/' target='_blank'><b>Universidad de Buenos Aires</b></a>";
            case locations.option17:
                return "<a href='https://www.unc.edu.ar/' target='_blank'><b>Universidad Nacional de Córdoba (UNC)</b></a>";
            case locations.option18:
                return "<a href='https://www.unca.edu.ar/' target='_blank'><b>Universidad Nacional de Catamarca (UNCA)</b></a>";
            case locations.option19:
                return "<a href='http://www.usal.edu.ar/' target='_blank'><b>Universidad del Salvador (USAL) Corrientes</b></a>";
            case locations.option20:
                return "<a href='http://www.utn.edu.ar/' target='_blank'><b>Universidad Tecnológica Nacional (UTN) Chaco</b></a>";
            case locations.option21:
                return "<a href='https://uncaus.edu.ar/' target='_blank'><b>Universidad Nacional del Chaco Austral (UNCAUS)</b></a>";
            case locations.option22:
                return "<a href='https://www.unp.edu.ar' target='_blank'><b>Universidad Nacional de la Patagonia (UNP)</b></a>";
            case locations.option23:
                return "<a href='https://www.uader.edu.ar' target='_blank'><b>Universidad Autónoma de Entre Ríos (UADER)</b></a>";
            case locations.option24:
                return "<a href='https://unju.edu.ar/' target='_blank'><b>Universidad Nacional de Jujuy (UNJU)</b></a>";
            case locations.option25:
                return "<a href='http://www.unlpam.edu.ar/' target='_blank'><b>Universidad Nacional de La Pampa (UNLPAM)</b></a>";
            case locations.option26:
                return "<a href='https://www.unlar.edu.ar/' target='_blank'><b>Universidad Nacional de La Rioja (UNLAR)</b></a>";
            case locations.option27:
                return "<a href='https://www.unam.edu.ar' target='_blank'><b>Universidad Nacional de Misiones (UNAM)</b></a>";
            default:
                return "<b>Ubicación Desconocida</b>";
        }
    }
    // Añadir eventos de clic para cada ubicación
    document.getElementById('option1').addEventListener('click', function () {
        updateMap(locations.option1);
    });

    document.getElementById('option2').addEventListener('click', function () {
        updateMap(locations.option2);
    });

    document.getElementById('option3').addEventListener('click', function () {
        updateMap(locations.option3);
    });

    document.getElementById('option4').addEventListener('click', function () {
        updateMap(locations.option4);
    });

    document.getElementById('option5').addEventListener('click', function () {
        updateMap(locations.option5);
    });

    document.getElementById('option6').addEventListener('click', function () {
        updateMap(locations.option6);
    });

    document.getElementById('option7').addEventListener('click', function () {
        updateMap(locations.option7);
    });

    document.getElementById('option8').addEventListener('click', function () {
        updateMap(locations.option8);
    });
    document.getElementById('option9').addEventListener('click', function () {
        updateMap(locations.option9);
    });
    document.getElementById('option10').addEventListener('click', function () {
        updateMap(locations.option10);
    });
    document.getElementById('option11').addEventListener('click', function () {
        updateMap(locations.option11);
    });
    document.getElementById('option12').addEventListener('click', function () {
        updateMap(locations.option12);
    });
    document.getElementById('option13').addEventListener('click', function () {
        updateMap(locations.option13);
    });
    document.getElementById('option14').addEventListener('click', function () {
        updateMap(locations.option14);
    });
    document.getElementById('option15').addEventListener('click', function () {
        updateMap(locations.option15);
    });

    document.getElementById('option16').addEventListener('click', function () {
        updateMap(locations.option16);
    });

    document.getElementById('option17').addEventListener('click', function () {
        updateMap(locations.option17);
    });


    document.getElementById('option18').addEventListener('click', function () {
        updateMap(locations.option18);
    });

    document.getElementById('option19').addEventListener('click', function () {
        updateMap(locations.option19);
    });

    document.getElementById('option20').addEventListener('click', function () {
        updateMap(locations.option20);
    });

    document.getElementById('option21').addEventListener('click', function () {
        updateMap(locations.option21);
    });

    document.getElementById('option22').addEventListener('click', function () {
        updateMap(locations.option22);
    });

    document.getElementById('option23').addEventListener('click', function () {
        updateMap(locations.option23);
    });

    document.getElementById('option24').addEventListener('click', function () {
        updateMap(locations.option24);
    });

    document.getElementById('option25').addEventListener('click', function () {
        updateMap(locations.option25);
    });

    document.getElementById('option26').addEventListener('click', function () {
        updateMap(locations.option26);
    });

    document.getElementById('option27').addEventListener('click', function () {
        updateMap(locations.option27);
    });
    const searchInput = document.getElementById('search');
    const autocompleteList = document.getElementById('autocomplete-list');
    let selectedUniversityId = null; // Para almacenar el ID de la universidad seleccionada
    let currentFocus = -1; // Controla la opción actual en la lista

    // Función para buscar la universidad y mostrar la lista de autocompletado
    function buscar() {
        const buscado = searchInput.value.trim().toLowerCase();
        autocompleteList.innerHTML = ''; // Limpiar la lista de autocompletado
        selectedUniversityId = null; // Reiniciar la selección
        currentFocus = -1; // Reiniciar el índice de la opción seleccionada

        if (buscado.length > 0) {
            universidades.forEach(universidad => {
                if (universidad.nombre.toLowerCase().includes(buscado)) {
                    const item = document.createElement('div');
                    item.textContent = universidad.nombre;
                    item.classList.add('autocomplete-item');
                    item.dataset.universidadId = universidad.id;

                    // Evento click en la opción
                    item.addEventListener('click', function () {
                        searchInput.value = universidad.nombre;
                        selectedUniversityId = universidad.id;
                        autocompleteList.innerHTML = ''; // Limpiar lista
                        actualizarMapa(); // Actualizar el mapa
                    });

                    autocompleteList.appendChild(item);
                }
            });

            autocompleteList.style.display = 'block';
        } else {
            autocompleteList.style.display = 'none';
        }
    }

    // Función para resaltar la opción seleccionada con las teclas de navegación
    function marcarOpcion(index) {
        const items = autocompleteList.getElementsByClassName('autocomplete-item');
        if (!items) return false;
        desmarcarOpcion();
        if (index >= items.length) currentFocus = 0;
        if (index < 0) currentFocus = items.length - 1;
        items[currentFocus].classList.add("selected");
    }

    // Eliminar la clase "selected" de todas las opciones
    function desmarcarOpcion() {
        const items = autocompleteList.getElementsByClassName('autocomplete-item');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("selected");
        }
    }

    // Función para seleccionar la opción actual
    function seleccionarOpcion() {
        const items = autocompleteList.getElementsByClassName('autocomplete-item');
        if (currentFocus > -1 && items) {
            items[currentFocus].click(); // Simular un clic en la opción seleccionada
        }
    }

    // Actualizar el mapa con la universidad seleccionada
    function actualizarMapa() {
        if (selectedUniversityId) {
            const location = locations[selectedUniversityId];
            const universidad = universidades.find(u => u.id === selectedUniversityId);

            if (location && universidad) {
                map.setView(location.coords, location.zoom);
                map.eachLayer(function (layer) {
                    if (layer instanceof L.Marker) {
                        map.removeLayer(layer);
                    }
                });

                // Crear el contenido del popup con el nombre de la universidad y el enlace
                const popupContent = `<a href="${universidad.url}" target="_blank"><b>${universidad.nombre}</b></a>`;
                L.marker(location.coords).addTo(map).bindPopup(popupContent).openPopup();
            } else {
                console.error('No se encontró la ubicación o la universidad.');
            }
        }
    }


    // Capturar las teclas de navegación y Enter
    searchInput.addEventListener('keydown', function (event) {
        const items = document.getElementsByClassName('autocomplete-item');
        if (event.key === 'ArrowDown') {
            currentFocus++;
            marcarOpcion(currentFocus);
        } else if (event.key === 'ArrowUp') {
            currentFocus--;
            marcarOpcion(currentFocus);
        } else if (event.key === 'Enter') {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            if (currentFocus > -1) {
                seleccionarOpcion(); // Seleccionar la opción resaltada
            }
        }
    });

    // Evento para actualizar la lista de autocompletado al escribir
    searchInput.addEventListener('input', buscar);

    // Ocultar la lista cuando se pierde el foco
    searchInput.addEventListener('blur', function () {
        setTimeout(() => {
            autocompleteList.style.display = 'none';
        }, 200); // Retraso para permitir clic en las opciones
    });
});

const universidades = [
    { id: 'option1', nombre: 'Universidad Nacional de la Matanza (UNLaM)', tipo: 'publicas', url: 'https://www.unlam.edu.ar/' },
    { id: 'option2', nombre: 'Universidad Tecnológica Nacional (UTN)', tipo: 'publicas', url: 'https://www.utn.edu.ar/' },
    { id: 'option3', nombre: 'Universidad Argentina de la Empresa (UADE)', tipo: 'privadas', url: 'https://www.uade.edu.ar/' },
    { id: 'option4', nombre: 'Universidad de Buenos Aires (UBA)', tipo: 'publicas', url: 'https://www.uba.ar/' },
    { id: 'option5', nombre: 'Universidad Austral', tipo: 'privadas', url: 'https://www.austral.edu.ar/' },
    { id: 'option6', nombre: 'Universidad de Moron', tipo: 'privadas', url: 'https://www.unimoron.edu.ar/' },
    { id: 'option7', nombre: 'Universidad Nacional de Hurlingham', tipo: 'publicas', url: 'https://unahur.edu.ar/' },
    { id: 'option8', nombre: 'Universidad Nacional del Oeste', tipo: 'publicas', url: 'https://www.uno.edu.ar/' },
    { id: 'option9', nombre: 'Universidad Abierta Interamericana', tipo: 'privadas', url: 'https://uai.edu.ar/' },
    { id: 'option10', nombre: 'Universidad Nacional de Hurlingham - Sede 2', tipo: 'publicas', url: 'https://unahur.edu.ar/' },
    { id: 'option11', nombre: 'Universidad Abierta Interamericana - Sede 2', tipo: 'privadas', url: 'https://uai.edu.ar/' },
    { id: 'option12', nombre: 'Universidad Abierta Interamericana - Sede 3', tipo: 'privadas', url: 'https://uai.edu.ar/' },
    { id: 'option13', nombre: 'Universidad de Buenos Aires - Facultad de Ingeniería', tipo: 'publicas', url: 'https://www.uba.ar/' },
    { id: 'option14', nombre: 'Universidad de Buenos Aires - Facultad de Arquitectura, Diseño y Urbanismo', tipo: 'publicas', url: 'https://www.uba.ar/' },
    { id: 'option15', nombre: 'Universidad de Buenos Aires - Facultad de Ciencias Económicas', tipo: 'publicas', url: 'https://www.uba.ar/' },
    { id: 'option16', nombre: 'Universidad de Buenos Aires - Facultad de Ciencias Biológicas', tipo: 'publicas', url: 'https://www.uba.ar/' },
    { id: 'option17', nombre: 'Universidad Nacional de Córdoba (UNC)', tipo: 'publicas', url: 'https://www.unc.edu.ar/' },
    { id: 'option18', nombre: 'Universidad Nacional de Catamarca (UNCA)', tipo: 'publicas', url: 'https://www.unca.edu.ar/' },
    { id: 'option19', nombre: 'Universidad del Salvador (USAL) Corrientes', tipo: 'privadas', url: 'http://www.usal.edu.ar/' },
    { id: 'option20', nombre: 'Universidad Tecnológica Nacional (UTN) Chaco', tipo: 'publicas', url: 'http://www.utn.edu.ar/' },
    { id: 'option21', nombre: 'Universidad Nacional del Chaco Austral (UNCAUS)', tipo: 'publicas', url: 'https://uncaus.edu.ar/' },
    { id: 'option22', nombre: 'Universidad Nacional de la Patagonia (UNP)', tipo: 'publicas', url: 'https:///www.unp.edu.ar/' },
    { id: 'option23', nombre: 'Universidad Autónoma de Entre Ríos (UADER)', tipo: 'publicas', url: 'https://www.uader.edu.ar/' },
    { id: 'option24', nombre: 'Universidad Nacional de Jujuy (UNJU)', tipo: 'publicas', url: 'https://unju.edu.ar/' },
    { id: 'option25', nombre: 'Universidad Nacional de La Pampa (UNLPAM)', tipo: 'publicas', url: 'http://www.unlpam.edu.ar/' },
    { id: 'option26', nombre: 'Universidad Nacional de La Rioja (UNLAR)', tipo: 'publicas', url: 'https://www.unlar.edu.ar/' },
    { id: 'option27', nombre: 'Universidad Nacional de Misiones (UNAM)', tipo: 'publicas', url: 'https://www.unam.edu.ar/' }
];






var ids = new Array(30);
ids[0] = 'option1';
ids[1] = 'option2';
ids[2] = 'option3';
ids[3] = 'option4';
ids[4] = 'option5';
ids[5] = 'option6';
ids[6] = 'option7';
ids[7] = 'option8';
ids[8] = 'option9'; //
ids[9] = 'option10';
ids[10] = 'option11'; //
ids[11] = 'option12'; //
ids[12] = 'sedeshurli';
ids[13] = 'sedesuai'; //
ids[14] = 'option13';
ids[15] = 'UBA';
ids[16] = 'option14';
ids[17] = 'option15';
ids[18] = 'option16';
ids[19] = 'option17';
ids[20] = 'option18';
ids[21] = 'option19';
ids[22] = 'option20';
ids[23] = 'option21';
ids[24] = 'option22';
ids[25] = 'option23';
ids[26] = 'option24';
ids[27] = 'option25';
ids[28] = 'option26';
ids[29] = 'option27';

var unis = new Array(ids.length).fill(0); // Inicializa el array unis con 0
var categorias = [
    // ing. informática 0
    [0, 1, 2, 8, 10, 11, 13, 14, 15, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29],
    // abogacía 1
    [0, 2, 3, 4, 5, 6, 7, 9, 12, 15, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    // lic. economía 2
    [0, 2, 4, 5, 6, 7, 9, 12, 15, 17, 21, 22, 20, 23, 24, 25, 26, 27, 28, 29],
    // ing. electromecánica 3
    [0, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // ing. mecánica 4
    [1, 5, 19],
    // marketing 5 
    [2, 4, 5, 19, 21],
    // contador público 6 
    [0, 2, 4, 5, 6, 9, 12, 15, 17, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // lic. ciencias de la computación 7
    [0, 2, 5, 8, 10, 11, 13, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    // ciencia política 8
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // medicina 9
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // arquitectura 10
    [0, 2, 4, 5, 6, 9, 12, 15, 16, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // ing. química 11 
    [1, 4, 5, 14, 15, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // economía 12
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // psicología 13
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // lic. ciencias biológicas 14 
    [0, 2, 4, 5, 6, 9, 12, 15, 18, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // lic. ciencias matemáticas 15 
    [0, 2, 4, 5, 6, 9, 12, 15, 18, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // ing. civil 16
    [1, 5, 6, 9, 12, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // educación física 17
    [0, 4, 5, 6, 9, 12, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // relaciones públicas 18
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // comunicación social 19 
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    // relaciones laborales 20
    [0, 2, 4, 5, 6, 9, 12, 21, 20, 22, 23, 24, 25, 26, 27, 28, 29],
    [0, 1, 3, 6, 7, 9, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29], //publicas
    [2, 4, 5, 8, 10, 11, 13, 21], //privadas
];
var cats = new Array(categorias.length).fill(0);
var pubpriv = 0;

var ant;
var activo=2;
function filtCateg(tag) {
    
    tag--;
    var accesibilidad = new Array(ids.length).fill(0);
    var Pub = document.getElementById("Pub");
    var Priv = document.getElementById("Priv");
    var Act = document.getElementById(tag+1);
    if(cats[tag]===1&&activo===0)
        Act.checked=false;
    else if(activo===1)
        Act.checked=true;
    else if(activo===1||activo===0)
        return;
    if (cats[tag] === 0) {
        cats[tag] = 1;
        if (tag == 21) {
            cats[22] = 0;
            Priv.checked = false;
            pubpriv = 1;
        }
        else if (tag == 22) {
            cats[21] = 0;
            Pub.checked = false;
            pubpriv = 2;
        }
        
    }
    else {
        cats[tag] = 0;
        if (tag == 21 && pubpriv == 1)
            pubpriv = 0;
        else if (tag == 22 && pubpriv == 2)
            pubpriv = 0;
        
    }
    var cant = 0;
    var unis = new Array(ids.length).fill(0);
    for (var i = 0; i < categorias.length - 2; i++) {
        if (cats[i] === 1) {
            
            cant++;
            for (var j = 0; j < categorias[i].length; j++) {
                var index = categorias[i][j];
                unis[index]++;
            }
        }
    }
    for (var i = categorias.length - 2; i < categorias.length; i++) {
        if ((i == categorias.length - 2 && pubpriv == 2) || (i == categorias.length - 1 && pubpriv == 1))
            continue;
        for (var j = 0; j < categorias[i].length; j++) {
            var index = categorias[i][j];
            accesibilidad[index] = 1;
        }
    }

    if (cant > 0) {
        for (var i = 0; i < ids.length; i++) {
            if (unis[i] >= 1 && accesibilidad[i] == 1) {
                var ops = document.getElementById(ids[i]);
                ops.classList.add('active');
            }
            else {
                var ops = document.getElementById(ids[i]);
                ops.classList.remove('active');
            }
        }

    }
    else {
        for (var i = 0; i < ids.length; i++) {

            if (accesibilidad[i] == 1 && pubpriv > 0) {
                var ops = document.getElementById(ids[i]);
                ops.classList.add('active');
            }
            else {
                var ops = document.getElementById(ids[i]);
                ops.classList.remove('active');
            }
        }
    }

}
/*////////////////mostrar resultados////////////////*/
// Recuperar el resultado del almacenamiento local
const resultado = localStorage.getItem('resultadoTest');
if (resultado) {
    document.getElementById('resultado').innerText = resultado;
} else {
    localStorage.setItem('resultadoTest2', 'l'); 
    document.getElementById('resultado').innerText = 'No se encontraron resultados. Por favor, realiza el test vocacional primero.';
}
const resultado2 = localStorage.getItem('resultadoTest2');

// Mostrar el resultado en el contenedor si existe

// Función para mostrar y ocultar el resultado
document.getElementById('toggleResultadoBtn').addEventListener('click', function () {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv.style.display === 'none') {
        resultadoDiv.style.display = 'block';
        if (resultado2 === 'a') {
            
            activo=1;
            filtCateg(1);
            filtCateg(4);
            filtCateg(5);
            filtCateg(8);
            filtCateg(12);
            filtCateg(16);
            filtCateg(17);
            activo=2;
        }
        else if (resultado2 === 'b') {

            activo=1;
            filtCateg(6);
            filtCateg(11);
            filtCateg(19);
            filtCateg(20);
            activo=2;
        }
        else if (resultado2 === 'c') {

            activo=1;
            filtCateg(2);
            filtCateg(3);
            filtCateg(9);
            filtCateg(21);
            activo=2;
        }
        else if (resultado2 === 'd') {

            activo=1;
            filtCateg(10);
            filtCateg(14);
            filtCateg(15);
            activo=2;
        }
        else if (resultado2 === 'e') {

            activo=1;
            filtCateg(3);
            filtCateg(7);
            filtCateg(21);
            activo=2;
        }
        else if (resultado2 === 'f') {

            activo=1;
            filtCateg(4);
            filtCateg(5);
            filtCateg(17);
            filtCateg(18);
            activo=2;
        }
        this.innerText = 'Guardar Resultado';
    } else {
        resultadoDiv.style.display = 'none';
        this.innerText = 'Mostrar Resultado';
        for(i=0; i<categorias.length; i++)
            {
                var Act = document.getElementById(i+1);
                Act.checked=false;
                if(cats[i]===1)
                    {
                        filtCateg(i+1);
                        cats[i]=0;
                    }
            }
    
        localStorage.removeItem('resultadoTest'); // Opcional: Limpiar el almacenamiento local si se oculta
    }
    activo=2;
});



/*//////clik en recomendadas////*/

function mostrarMapa(optionId) {
    const location = locations[optionId];
    if (location) {
        updateMap(location); // Llama a la función que actualiza el mapa con la ubicación
    }
}

/*///desplegable de izq///*/
function togglePanel() {
    const panel = document.getElementById('panel');
    const toggleButton = document.getElementById('toggleButton');
    panel.classList.toggle('active');

    
}
/*//////barra de busqueda///////*/
// Simulación de la función updateMap (usada para actualizar el mapa)
const searchInput = document.getElementById('search');
let selectedUniversityId = null; // Variable para almacenar la universidad seleccionada

// Función para buscar la universidad y autocompletar
function buscar() {
    const buscado = searchInput.value.trim().toLowerCase();

    // Limpiar la lista de autocompletado
    autocompleteList.innerHTML = '';
    selectedUniversityId = null; // Reiniciar la variable de selección

    if (buscado.length > 0) {
        universidades.forEach(universidad => {
            // Comprobar si el texto buscado coincide con el nombre de una universidad
            if (universidad.nombre.toLowerCase().includes(buscado)) {
                const item = document.createElement('div');
                item.textContent = universidad.nombre;
                item.classList.add('autocomplete-item');
                item.dataset.universidadId = universidad.id;

                // Agregar evento click a cada opción de la lista
                item.addEventListener('click', function () {
                    // Establecer el valor del input al seleccionar una universidad
                    searchInput.value = universidad.nombre;

                    // Guardar el ID de la universidad seleccionada
                    selectedUniversityId = universidad.id;

                    // Limpiar la lista de autocompletado
                    autocompleteList.innerHTML = '';

                    // Actualizar el mapa
                    actualizarMapa();
                });

                // Agregar el item a la lista de autocompletado
                autocompleteList.appendChild(item);
            }
        });

        // Mostrar la lista si hay resultados
        autocompleteList.style.display = 'block';
    } else {
        // Ocultar la lista si no hay resultados
        autocompleteList.style.display = 'none';
    }
}



// Event listener para el campo de búsqueda
searchInput.addEventListener('input', buscar);


// Cerrar la lista desplegable
function cerrarLista() {
    autocompleteList.style.display = 'none';
}

// Resaltar la opción seleccionada con el teclado
function marcarOpcion(index) {
    const items = document.querySelectorAll('.autocomplete-item');
    items.forEach(item => item.classList.remove('selected')); // Eliminar resaltado anterior
    if (index >= 0 && index < items.length) {
        items[index].classList.add('selected'); // Resaltar la opción actual
        items[index].scrollIntoView({ block: 'nearest' }); // Asegurar que la opción esté visible
    }
}


// Event listeners para manejar la entrada del usuario
searchInput.addEventListener('input', buscar);
document.getElementById('search').addEventListener('input', buscar);
document.getElementById('search').addEventListener('input', buscar); // Al escribir en el input
document.getElementById('search').addEventListener('blur', cerrarLista); // Al perder el foco (click fuera)
document.getElementById('search').addEventListener('focus', buscar); // Al obtener foco (al hacer click en el input)

// Manejar las teclas de navegación arriba/abajo y Enter
document.getElementById('search').addEventListener('keydown', function (e) {
    const items = document.querySelectorAll('.autocomplete-item');
    if (e.key === 'ArrowDown') {
        e.preventDefault(); // Prevenir el scroll del body
        currentFocus++;
        if (currentFocus >= items.length) currentFocus = 0; // Ciclar al principio
        marcarOpcion(currentFocus);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault(); // Prevenir el scroll del body
        currentFocus--;
        if (currentFocus < 0) currentFocus = items.length - 1; // Ciclar al final
        marcarOpcion(currentFocus);
    } else if (e.key === 'Enter') {
        e.preventDefault(); // Prevenir que se envíe el formulario
        seleccionarOpcion(); // Seleccionar la opción resaltada
    }
});

// Estilos para la opción seleccionada
const style = document.createElement('style');
style.innerHTML = `
    .autocomplete-item {
        padding: 8px;
        cursor: pointer;
    }
    .autocomplete-item.selected {
        background-color: #e9e9e9;
    }
`;
document.head.appendChild(style);

///////checkbox//////

function deseleccionar() {

    for(var i=0; i<categorias.length-2; i++)
        {
            var Act = document.getElementById(i+1);
            Act.checked=false;
            if(cats[i]===1)
                {
                    filtCateg(i+1);
                }
        }
        var Pub = document.getElementById("Pub");
        var Priv = document.getElementById("Priv");
        Pub.checked=false;
        Priv.checked=false;
        pubpriv=0;
        for(var i=categorias.length-2; i<categorias.length; i++)
            {
                if(cats[i]===1)
                    {
                        filtCateg(i+1);
                    }
            }
}
