let card = {
    contenuto: {
        titolo: "Primo posto", // h1
        sottotitolo:"Sci aplinismo", // h2
        testo: "Primo classificato alle olimpiadi", // p
        immagine: "" // img
    },
    bordo: {
        colore: "",
        stile: "",
        dimensione: "",
        raggio: ""
    }
}

const cardList = [
    {
        contenuto: {
            titolo: "Aggiungi", // h1
            sottotitolo:"Recapita multa", // h2
            testo: "servizio esclusivo di guardia ambientale", // p
            immagine: "assets/img/ambiente.png" // img
        },
        bordo: {
            colore: "",
            stile: "",
            dimensione: "",
            raggio: ""
        }
    },
    {
        contenuto: {
            titolo: "Modifica", // h1
            sottotitolo:"Variazioni multe esistenti", // h2
            testo: "servizio esclusivo di guardia ambientale", // p
            immagine: "assets/img/ambiente.png" // img
        },
        bordo: {
            colore: "",
            stile: "",
            dimensione: "",
            raggio: ""
        }
    },
    {
        contenuto: {
            titolo: "Storico", // h1
            sottotitolo:"Visualizza multe e stati", // h2
            testo: "servizio misto tra guardia e civili", // p
            immagine: "assets/img/ambiente.png" // img
        },
        bordo: {
            colore: "",
            stile: "",
            dimensione: "",
            raggio: ""
        }
    },
    {
        contenuto: {
            titolo: "Elimina", // h1
            sottotitolo:"Ritira multa", // h2
            testo: "servizio esclusivo di guardia ambientale", // p
            immagine: "assets/img/ambiente.png" // img
        },
        bordo: {
            colore: "",
            stile: "",
            dimensione: "",
            raggio: ""
        }
    }
];

const cardContainer = document.querySelector("#card-container-main");
const filtroInput = document.querySelector("#");