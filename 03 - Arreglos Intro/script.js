// Lista de alumnos
const alumnos = [
    {
        "nombre": "Javier",
        "apellidoPaterno": "Gómez",
        "apellidoMaterno": "López",
        "matricula": "20230011"
    },
    {
        "nombre": "Marta",
        "apellidoPaterno": "Díaz",
        "apellidoMaterno": "Fernández",
        "matricula": "20230012"
    },
    {
        "nombre": "Diego",
        "apellidoPaterno": "Hernández",
        "apellidoMaterno": "García",
        "matricula": "20230013"
    },
    {
        "nombre": "Laura",
        "apellidoPaterno": "Martínez",
        "apellidoMaterno": "Rodríguez",
        "matricula": "20230014"
    },
    {
        "nombre": "Andrés",
        "apellidoPaterno": "Pérez",
        "apellidoMaterno": "Sánchez",
        "matricula": "20230015"
    },
    {
        "nombre": "Carmen",
        "apellidoPaterno": "Gutiérrez",
        "apellidoMaterno": "Ramírez",
        "matricula": "20230016"
    },
    {
        "nombre": "Fernando",
        "apellidoPaterno": "Torres",
        "apellidoMaterno": "Flores",
        "matricula": "20230017"
    },
    {
        "nombre": "Isabel",
        "apellidoPaterno": "Rivera",
        "apellidoMaterno": "Vargas",
        "matricula": "20230018"
    },
    {
        "nombre": "Ricardo",
        "apellidoPaterno": "Castillo",
        "apellidoMaterno": "Reyes",
        "matricula": "20230019"
    },
    {
        "nombre": "Patricia",
        "apellidoPaterno": "Morales",
        "apellidoMaterno": "Cruz",
        "matricula": "20230020"
    }
];

// Elementos del DOM
const listaAlumnos = document.getElementById('listaAlumnos');
const filtroAlumno = document.getElementById('filtroAlumno');
const btnConsulta = document.getElementById('btnConsulta');
const campoBusqueda = document.getElementById('campoBusqueda');
const contador = document.getElementById('contador');

// Función para mostrar los alumnos
function mostrarAlumnos(alumnosFiltrados) {
    listaAlumnos.innerHTML = '';
    
    if (alumnosFiltrados.length === 0) {
        listaAlumnos.innerHTML = '<li class="no-resultados">No se encontraron alumnos que coincidan con la búsqueda</li>';
        return;
    }
    
    alumnosFiltrados.forEach(alumno => {
        const li = document.createElement('li');
        li.className = 'alumno-item';
        li.innerHTML = `
            <div class="alumno-nombre">${alumno.nombre} ${alumno.apellidoPaterno}</div>
            <div class="alumno-detalle">${alumno.apellidoMaterno}</div>
            <div class="alumno-detalle">${alumno.matricula}</div>
        `;
        listaAlumnos.appendChild(li);
    });
    
    // Actualizar contador
    contador.textContent = `Mostrando ${alumnosFiltrados.length} de ${alumnos.length} alumnos`;
}

// Función para filtrar alumnos
function filtrarAlumnos() {
    const textoBusqueda = filtroAlumno.value.toLowerCase();
    const campoSeleccionado = campoBusqueda.value;
    
    if (!textoBusqueda) {
        mostrarAlumnos(alumnos);
        return;
    }
    
    const alumnosFiltrados = alumnos.filter(alumno => {
        const valorCampo = alumno[campoSeleccionado].toLowerCase();
        return valorCampo.includes(textoBusqueda);
    });
    
    mostrarAlumnos(alumnosFiltrados);
}

// Event Listeners
btnConsulta.addEventListener('click', filtrarAlumnos);
filtroAlumno.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filtrarAlumnos();
    }
});

// Inicializar la lista de alumnos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarAlumnos(alumnos);
});

/*
const filtroInput = document.getElementById('filtroAlumno');
const listaAlumnos = document.getElementById('listaAlumnos');
const contador = document.getElementById('contador');
const btnConsulta = document.getElementById('btnConsulta');

// Función para mostrar los alumnos
function mostrarAlumnos(alumnosFiltrados) {
    listaAlumnos.innerHTML = '';
    
    if (alumnosFiltrados.length === 0) {
        listaAlumnos.innerHTML = '<li class="no-resultados">No se encontraron alumnos con ese nombre</li>';
    } else {
        alumnosFiltrados.forEach(alumno => {
            const li = document.createElement('li');
            li.className = 'alumno-item';
            li.innerHTML = `<div class="alumno-nombre">${alumno}</div>`;
            listaAlumnos.appendChild(li);
        });
    }
    
    // Actualizar contador
    contador.textContent = `Mostrando ${alumnosFiltrados.length} de ${alumnos.length} alumnos`;
}







//Mostar solo el primero en aparecer 






// Función para filtrar alumnos
function filtrarAlumnos() {
    const textoFiltro = filtroInput.value.toLowerCase();
    const alumnosFiltrados = alumnos.filter(alumno => 
        alumno.toLowerCase().includes(textoFiltro)
    );
    mostrarAlumnos(alumnosFiltrados);
}

// Event Listeners
filtroInput.addEventListener('input', filtrarAlumnos);

btnConsulta.addEventListener('click', () => {
    alert('Consulta realizada. Se muestran los resultados del filtro actual.');
});

// Inicializar mostrando todos los alumnos
mostrarAlumnos(alumnos);

console.log(alumnos);
console.log("Cantidad de alumnos: " + alumnos.length);
/*

//Agregar
alumnos.push("Paula");
//Eliminar
alumnos.pop();
//Agregar al inicio
alumnos.unshift("Paula");
//Eliminar al inicio
alumnos.shift();
//Actualizar
alumnos[2] = "Paula";
//Buscar
console.log(alumnos.indexOf("Clara"));
//INCLUDES
console.log(alumnos.includes("Clara"));
//Encontrar
console.log(alumnos.find(nombre => nombre === "Clara"));

//Equivalente a un forEach
for (var i = 0; i < alumnos.length; i++) {
    if (alumnos[i] === "Clara") {
        console.log("Encontrado con for: " + alumnos[i]);
    }
}
//Encontrar indice
console.log(alumnos.findIndex(nombre => nombre === "Clara"));
//Encontrar indice con for
for (var i = 0; i < alumnos.length; i++) {
    if (alumnos[i] === "Clara") {
        console.log("Encontrado indice con for: " + i);
    }
}
*/