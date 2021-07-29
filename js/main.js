// Un alert() espone 5 numeri generati casualmente

let myArrayNumeri = [];
let numI = 5;
while (myArrayNumeri.length < numI) {
    var numeroRdm = numeroRandom(1,100);


    if (existInArray(myArrayNumeri, numeroRdm) == false) {
        myArrayNumeri.push(numeroRdm);
    }  
}

alert("Hai 30 secondi per memorizzare i numeri: " + myArrayNumeri);

// Da li parte un timer di 30 secondi.

let secondi = 5;
let idInterval = setInterval(timer, 1000);
function timer(){
    document.getElementById("secondi").innerHTML = secondi;
    if (secondi == 0) {
        clearInterval(idInterval);
    }
    secondi--;
}


let arrayNumGiocatore = [];
    parseInt(prompt("Inserisci il primo numero"));
    parseInt(prompt("Inserisci il secondo numero"));
    parseInt(prompt("Inserisci il terzo numero"));
    parseInt(prompt("Inserisci il quarto numero"));
    parseInt(prompt("Inserisci il quinto numero"));

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// inizio sezione FUNZIONI
// genera un numero random 
function numeroRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
// I numeri non possono essere duplicati.
function existInArray (array, item) {
    for (i = 0; i < array.length; i++) {
        if (item == array[i]) {
            return true;
        }
    }
    return false
}



// fine sezione FUNZIONI