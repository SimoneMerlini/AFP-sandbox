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
    },
    {
        contenuto: {
            titolo: "Void", // h1
            sottotitolo:"Void/null", // h2
            testo: "n/a", // p
            immagine: "" // img
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

const listaFigli = cardContainer.children;
const nFigliTot = listaFigli.length;

for (let i = 0; i < nFigliTot; i++) {
    console.log(`Elemento figlio ${i}: `, listaFigli[0].children[0].textContent);
    cardContainer.removeChild(listaFigli[0]);
    // cardContainer.removeChild(listaFigli.item(i));
}

// CREARE UN NUOVO ELEMENTO

/**
 * Crea un elemento card basato sui dati forniti.
 * @param cardData - Oggetto contenente i dati della card.
 * @returns {HTMLDivElement} - L'elemento card creato.
 */
function createCardElement(cardData){
    const cardElement = document.createElement("div");
    const titolo = document.createElement("h1");
    const sottoTitolo = document.createElement("h2");
    const testo = document.createElement("p");

    cardElement.classList.add("card");

    titolo.textContent = cardData.contenuto.titolo;
    sottoTitolo.textContent = cardData.contenuto.sottotitolo;
    testo.textContent = cardData.contenuto.testo;


    cardElement.appendChild(titolo);
    cardElement.appendChild(sottoTitolo);
    cardElement.appendChild(testo);

    if (cardData.contenuto.immagine) {
        const img = document.createElement("img");
        img.src = cardData.contenuto.immagine;
        img.alt = "Immagine di esempio";
        img.width = 200;
        cardElement.appendChild(img);
    }

    return cardElement;
}

document.querySelector("#solo-immagini").addEventListener("click", soloImmagini);
document.querySelector("#solo-testo").addEventListener("click", soloTesto);
document.querySelector("#mostra-tutto").addEventListener("click", mostraTutto);

const renderCards = (cardList) => {
    cardList.forEach((item) => {
        const cardTmp = createCardElement(item);
        cardTmp.addEventListener("click",() =>{
            cardTmp.classList.toggle("bg-green");
        });
        cardContainer.appendChild(cardTmp);
    });
}
renderCards(cardList);

function soloImmagini(){
    console.log("Mostra solo immagini");
    cardContainer.innerHTML = "";

    const listTmp = cardList.filter((item) => item.contenuto.immagine !== "");
    renderCards(listTmp);
}

function soloTesto(){
    console.log("Mostra solo testo");
    cardContainer.innerHTML = "";
    
    const listTmp = cardList.filter((item) => item.contenuto.immagine === "");
    renderCards(listTmp);
}

function mostraTutto(){
    console.log("Mostra tutto");
    cardContainer.innerHTML = "";
    renderCards(cardList);
}

const filterInput = document.querySelector("#filter-input");

filterInput.addEventListener("input", (event) => {
    const testoFiltro = event.target.value.toLowerCase();
    const cardFiltrate = cardList.filter((item) => {
        const titolo = item.contenuto.titolo.toLowerCase();
        console.log(testoFiltro);
        
        return titolo.includes(testoFiltro);
    });

    cardContainer.innerHTML = "";
    renderCards(cardFiltrate);
});