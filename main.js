/* Dichiarazione delle variabili, richiesta dati e memorizzazione */

let km = parseInt(prompt("Quanti KM devi percorrere ?"));
let eta = parseInt(prompt("Quanti anni hai ?"));

/* Dichiarazioni delle variabili ed esecuzione calcoli */
let prezzo;
let prezzoPerKm = 0.21;
prezzo = km * prezzoPerKm;
let sconto;
let prezzoFinale;

/* Controllo eta, calcolo dello sconto e stampa a video */
if (eta < 18) {
    sconto = prezzo * 0.2;
    prezzoFinale = prezzo - sconto;
    document.getElementById("biglietto").innerHTML = "Il costo del biglietto è: " + prezzoFinale.toFixed(2) + "€";
    document.getElementById("info").innerHTML = "E\' stato applicato uno sconto per minori";
} else if (eta > 65) {
    sconto = prezzo * 0.4;
    prezzoFinale = prezzo - sconto;
    document.getElementById("biglietto").innerHTML = "E\' stato applicato uno sconto per persone anziane";
    document.getElementById("info").innerHTML = "Il costo del biglietto è: " + prezzoFinale.toFixed(2) + "€";
} else {
    prezzoFinale = prezzo;
    document.getElementById("biglietto").innerHTML = "Il costo del biglietto è: " + prezzoFinale.toFixed(2) + "€";
}


















