// 2 Esercizio
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let randomPc = Math.floor((Math.random() * 6) + 1);
let randomUser = Math.floor((Math.random() * 6) + 1);
console.log("Il numero del computer è " + randomPc);
console.log("Il numero dell'utente è " + randomUser);

if (randomUser > randomPc) {
    console.log ("Il numero dell'utente è più alto, hai vinto!");
} else if (randomUser < randomPc) {
    console.log("Il numero dell'utente è più basso, hai perso");
} else {
    console.log("I due numeri sono uguali, pareggio");
}