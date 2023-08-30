let $nombreInput = document.getElementById("nombre");
let $puntajeJugador = document.getElementById("jugadorCount");
let $puntajePC = document.getElementById("pcCount");

let $reiniciar = document.getElementById("reiniciar");
$reiniciar.addEventListener("click", () => { reiniciar() });

let $botonPiedra = document.getElementById("piedra");
$botonPiedra.addEventListener("click", () => { setear("piedra") });

let $botonPapel = document.getElementById("papel");
$botonPapel.addEventListener("click", () => { setear("papel") });

let $botonTijera = document.getElementById("tijera");
$botonTijera.addEventListener("click", () => { setear("tijera") });


let opcionJugador;
let opcionPC;

let jugadorCount = 0;
let pcCount = 0;
/**
 * Funcion que toma el nombre
 */
function agregarNombre() {
    let nombre = $nombreInput.value;

    /**
     * Condicion de testeo para la otencion del nombre
     */
    if (nombre !== null) {
        console.log(nombre);
    }
}

function setear(id) {
    opcionJugador = id;
    opcionPC = "papel"; // Aleatorio

    console.log("Jugador " + opcionJugador);
    console.log("PC " + opcionPC);

    determinarGanador();
}

function determinarGanador() {

    if (opcionJugador === opcionPC) {
        console.log("Empate");
    }
    else if (
        (opcionJugador === "piedra" && opcionPC === "tijera") ||
        (opcionJugador === "papel" && opcionPC === "piedra") ||
        (opcionJugador === "tijera" && opcionPC === "papel")
    ) {
        console.log("Gana JUGADOR");
        jugadorCount++;
        $puntajeJugador.innerHTML = jugadorCount;
    }
    else {
        console.log("Gana PC");
        pcCount++;
        $puntajePC.innerHTML = pcCount;
    }

    // Que ya hay ganador
    if(jugadorCount >= 3 || pcCount >= 3){

        if (jugadorCount >= 3) {
            console.log("GANADOR PARTIDA JUGADOR");
        }
        else if(pcCount >= 3){
            console.log("GANADOR PARTIDA PC");
        }
        // Deshabilitar botones de opciones
        $reiniciar.style.display = "block";
    }

    opcionJugador = "";
    opcionPC = "";
}

function reiniciar() {
    jugadorCount = 0;
    pcCount = 0;
    $puntajeJugador.innerHTML = jugadorCount;
    $puntajePC.innerHTML = pcCount;
    //Habilitar botones
}
