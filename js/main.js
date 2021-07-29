// Un alert() espone 5 numeri generati casualmente

let myArrayNumeri = [];
let numI = 5;
while (myArrayNumeri.length < numI) {
    var numeroRdm = numeroRandom(1,100);


    if (existInArray(myArrayNumeri, numeroRdm) == false) {
        myArrayNumeri.push(numeroRdm);
    }  
}

alert("Memorizza i numeri: " + myArrayNumeri);
console.log(myArrayNumeri);

// Da li parte un timer di 30 secondi.

let secondi = 2;// da inserire 30 secondi
let idInterval = setInterval(timer, 1000);
function timer(){
    document.getElementById("secondi").innerHTML = secondi;
    if (secondi == 0) {
        clearInterval(idInterval);
        // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        let arrayNumGiocatore = [];
        for (let i = 0; i < 5; i++) {
            arrayNumGiocatore.push(parseInt(prompt("inerisci i numeri uno alla volta")));
        }
        console.log(arrayNumGiocatore);

        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

        // questa soluzione non è corretta così compara solo se numero e posizione sono identici(da rivedere!)
        if  (comparaArray(arrayNumGiocatore, myArrayNumeri) == true) {
            console.log("hai vinto");
        }  else {
            console.log("hai perso");
        }

       
    
    }
    secondi--;
}







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
//fuzione di comparazione di due array
function comparaArray(array1, array2) {
    if (array1.length != array2.length) return false;
    for (var i = 0; i < array1.length; i++){
        if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true; 
}
// fine sezione FUNZIONI