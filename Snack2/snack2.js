"use strict";
console.clear();

// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

const n = parseInt(prompt("Inserisci un numero")); 
console.log(n);
for (let i = 1; i<=n; i++) {
    console.log("Il numero "+ i + " alla terza è " + Math.pow(i, 3));
}