/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi. */
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

function writeNumbers(number) {
  // salvare i valori; dopo che sono stati inseriti tutti e 5, fare il return
  var userNumbers = [];
  for ( i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Inserisci un numero che ricordi"));
    userNumbers.push(userNumber);
  }
  //return dei numeri [1,4,66...]
  return userNumbers;
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
  alert("Vediamo un po'...Quanti dei numeri riesci a ricordare?! ");
  numbersWritten = writeNumbers();
  console.log(numbersWritten);
}, 3000);

/* [8,55,33,77,21].includes(77)
/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

fare check di quali numbersWritten[i] sono presenti in randomNumbers
var numbersWritten;
var randomNumbers; 
*/
var score = [];

if (randomNumbers.includes(numbersWritten[i]) ) {
  score.push(numbersWritten[i]);
  console.log(score);
} else {

}