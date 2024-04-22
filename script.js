const opciones = ["piedra", "papel", "tijeras"];

const eleccionComputadora = () => opciones[Math.floor(Math.random() * 3)];

const obtenerResultado = (jugador, computadora) => {
    if (jugador === computadora) return "¡Es un empate!";
    if ((jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")) {
        return "¡Has ganado!";
    } else {
        return "¡Has perdido!";
    }
};

document.querySelectorAll(".opcion").forEach(boton => {
    boton.addEventListener("click", () => {
        const eleccionJugador = boton.id;
        const computadora = eleccionComputadora();
        const resultado = obtenerResultado(eleccionJugador, computadora);
        mostrarResultado(resultado, eleccionJugador, computadora);
        ocultarOpciones();
    });
});

function ocultarOpciones() {
    document.querySelectorAll(".opcion").forEach(boton => {
        boton.style.display = "none";
    });
}

function mostrarResultado(resultado, eleccionJugador, eleccionComputadora) {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerText = resultado;

    const eleccionJugadorElemento = document.getElementById("eleccion-jugador");
    eleccionJugadorElemento.innerHTML = `<p class="opcion-seleccionada opcion-jugador">Tu elección: <img src="imagenes/${eleccionJugador}.jpg" alt="${eleccionJugador}" class="opcion-seleccionada"></p>`;

    const eleccionComputadoraElemento = document.getElementById("eleccion-computadora");
    eleccionComputadoraElemento.innerHTML = `<p class="opcion-seleccionada opcion-computadora">Elección de la computadora: <img src="imagenes/${eleccionComputadora}.jpg" alt="${eleccionComputadora}" class="opcion-seleccionada"></p>`;

    const btnJugarOtraVez = document.getElementById("btn-jugar-otra-vez");
    btnJugarOtraVez.classList.add("mostrar"); // Agregar clase para mostrar el botón
}

// Agregar evento click al botón
document.getElementById("btn-jugar-otra-vez").addEventListener("click", function() {
    reiniciarJuego();
});

// Función para reiniciar el juego
function reiniciarJuego() {
    // Mostrar las opciones nuevamente
    document.querySelectorAll(".opcion").forEach(boton => {
        boton.style.display = "block";
    });

    // Limpiar los resultados y ocultar el botón
    document.getElementById("resultado").innerText = "";
    document.getElementById("eleccion-jugador").innerHTML = "";
    document.getElementById("eleccion-computadora").innerHTML = "";
    document.getElementById("btn-jugar-otra-vez").classList.remove("mostrar"); // Ocultar el botón
}
