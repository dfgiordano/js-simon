/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi. */
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

function writeNumbers(number) {
  for ( i = 0; i < 5; i++) {
    prompt("Inserisci un numero che ricordi");
  }
}
/* creo un array di 5 numeri casuali da introdurre poi nell' alert */
var randomNumbers = []; 
for ( i = 0; i < 5; i++ ) {
    var number = getRandomNumber(1, 100);
    randomNumbers.push(number);
}
console.log(randomNumbers);

/* creo alert contenente 5 numeri casuali generati */
alert("Stanno per arrivare i 5 numeri generati......cerca di ricordarli!")
alert (randomNumbers);

/* Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */
var numbersWritten = [];
setTimeout(function(){
  var userChoice = writeNumbers();
  numbersWritten.push(userChoice);
  console.log(numbersWritten);
}, 3000) ;


alert("Vediamo un po'...Quanti dei numeri riesci a ricordare?! ");
var score = [];
var result = true;
for (i = 0; i < randomNumbers.length; i++) {
  if (result == true) {
    score.push(i);
  }
}
/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */