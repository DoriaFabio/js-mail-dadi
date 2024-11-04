"use strict";
console.clear();

// Stampa le potenze di 2 fino a 1000.
let risultato = 0;
let i = 0;
while (risultato < 1000 && i < 15) {
    risultato = Math.pow(2, i);
    if (risultato > 1000) {
        break;
    }
    console.log("2 alla " + i + " è uguale a " + risultato);
    i++;
}
