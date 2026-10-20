// Intercettare elementi html

let header = document.getElementById("header_AFP");

//let main = document.getElementById("main_AFP");
//let main = document.querySelector("#main_AFP");

//let card = document.getElementsByClassName("card");
//let card = document.querySelectorAll(".card");

console.log(header);

header.addEventListener("click", (event) => {
    let x = event.x;
    let y = event.y;

    console.log("Hai cliccato in posizione: " + x + ", " + y);

    if (x < window.innerWidth / 2) {
        console.log("Hai cliccato a sinistra");
    } else {
        console.log("Hai cliccato a destra");
    }
});

let card = {
    contenuto:{
        titolo: "",
        sottotitolo: "",
        testo: "",
        immagine: ""
    },
    bordo:{
        colore: "",
        spessore: "",
        raggio: ""
    }
};

// Rimuovere tutti i figli di un elemento
const cardContainer = document.querySelector("#cardContainer");
const listaFigli = cardContainer.children;
const nFigli = listaFigli.length;
for (let i = 0; i < nFigli; i++) {
    cardContainer.removeChild(listaFigli[0]);
}