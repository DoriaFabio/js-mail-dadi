"use strict";
console.clear();
// 1 Esercizio
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email

const email = [
    'nathan@gmail.com',
    'alessandro@gmail.com',
    'fabio@gmail.com',
    'paolo@gmail.com',
    'carlo@gmail.com',
    'lewis@gmail.com',
    'luca@gmail.com'
];

const emailutente = prompt("Inserisci la tua email");
console.log(emailutente);
let x = false;
for(let i = 0; i < email.length; i++) {
    if (emailutente==email[i]) {
        console.log("Sei nella lista e puoi accedere");
        x = true;
    }
} 
if (x==false) {
    console.log ("Non fai parte della lista e non puoi accedere");
}


// 2 Esercizio
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.