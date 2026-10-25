const si = document.getElementById("si");
const no = document.getElementById("no");

// Cliccando SÌ cambia schermata
si.addEventListener("click", () => {
    document.getElementById("inizio")
        .classList.add("hidden");

    document.getElementById("finale")
        .classList.remove("hidden");

    no.classList.add("hidden");
});

// Il pulsante NO scappa dal mouse
// Inizialmente il pulsante è cliccabile
let primoClick = false;

function scappa() {
    no.classList.add("scappa");

    const margine = 20;

    const maxX = Math.max(
        0, window.innerWidth - no.offsetWidth - margine * 2
    );

    const maxY = Math.max(
        0, window.innerHeight - no.offsetHeight - margine * 2
    );

    const x = margine + Math.random() * maxX;
    const y = margine + Math.random() * maxY;

    no.style.left = x + "px";
    no.style.top = y + "px";
}

// Al primo click attiva la modalità fuga
no.addEventListener("click", (event) => {
    event.preventDefault();

    if (!primoClick) {
        primoClick = true;
        scappa();
    }
});

// Scappa all'hover SOLO dopo il primo click
no.addEventListener("mouseenter", () => {
    if (primoClick) {
        scappa();
    }
});

// Premendo la combinazione di tasti si cambia schermata
document.addEventListener("keydown", (event) => {
    const combinazione =
        event.ctrlKey &&
        event.altKey &&
        event.key.toLowerCase() === "g";

    const finale = document.getElementById("finale");

    if (combinazione && !finale.classList.contains("hidden")) {
        event.preventDefault();

        finale.classList.add("hidden");

        document.getElementById("conferma")
            .classList.remove("hidden");
    }
});

// Effetto neve
function creaFiocco() {
    const fiocco = document.createElement("div");
    fiocco.className = "neve";
    fiocco.textContent = "❄";

    fiocco.style.left = Math.random() * 100 + "vw";
    fiocco.style.fontSize =
        (10 + Math.random() * 18) + "px";

    const durata = 4 + Math.random() * 5;

    fiocco.style.animationDuration = durata + "s";

    document.body.appendChild(fiocco);

    setTimeout(() => fiocco.remove(), durata * 1000);
}

setInterval(creaFiocco, 250);
