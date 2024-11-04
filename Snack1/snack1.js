"use strict";
console.clear();

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

let arrayV = [];
for (let i = 1; i<=6; i++){
    let x = parseInt(prompt("Inserisci un numero"));
    console.log(x);
    if(x % 2 != 0) {
        arrayV.push(x);
    }
} 
console.log(arrayV);

