// Js utilizza gli oggetti: oggetto console per stampare nel terminale del browser.
console.log("Hello, World!");

const PI = 3.14;

/*
Le variabili possono essere dichiarate con var, let o const.
    - const -> no scrittura dopo inizializzazione
    - var -> sempre visibile (variabili globali)
    - let -> visibile solo nello scope
*/
let n = 15;
var p = 'Pietro Rocchio';

let aura;

console.log("Numero studenti: " + n);
console.log("Professore: " + p);
console.log("aura: " + aura);

let a = 12;
let b = 7;
let c = a + b;

/*
La concatenazione si può eseguire con + o ,.
    - + -> converte tutto in stringa
    - , -> mantiene il tipo di dato
*/
console.log("Somma: " + c);
console.log("Somma: ", c);

// Tipi di dato possibili in JS: undefined, null, nan e infinity
let w = undefined;
let x = null;
let y = NaN;
let z = Infinity;

let numero = 10;
// Carattere inglobato nella stringa
let stringa = "Ciao"; 
let booleano = true;
let array = [1, 2, 3];
let oggetto = { nome: "Simone", cognome: "Merlini" };

// Metodo più comune per dichiarare una funzione
function funzione(a, b) {
    c = a + b;
    return c;
};
console.log("Somma: " + funzione(5, 10));