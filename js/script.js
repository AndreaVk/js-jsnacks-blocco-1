//JSnack 1
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while
//JSnack 2
//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione 
//che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza,
//stamparle entrambe altrimenti stampare la più lunga delle due.
//JSnack 3
//Stampa le potenze di 2 fino a 1000.

//snack1
//var n, somma=0;

//for (var i = 0; i < 5; i++) {
   // n = parseInt(prompt('Inserisci un numero'));
   // somma += n;
//}
//console.log('la somma è ', somma);

//let n, somma=0;

//let i=0;

//while(i < 5){
   // n = parseInt(prompt('Inserisci un numero'));
   // somma +=n;
   // i++;
//}
//console.log('la somma è', somma)

//snack 3
//let potenza = 1;
//while (potenza < 1000) {
//console.log(potenza);
 //potenza = potenza * 2;
//}

//snack2
const parola1 = prompt("inserisci la prima parola");
const parola2 = prompt("inserisci la seconda parola");

if (parola1.length < parola2.length){
   console.log(parola2);
} else if (parola1.length < parola2.length) {
   console.log(parola1);
} else{
   console.log(parola1);
   console.log(parola2);
}