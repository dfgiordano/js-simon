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
    // var userNumber = parseInt(prompt("Inserisci un numero che ricordi"));
    var userNumber = parseInt(prompt("Inserisci un numero che ricordi"));
    
    userNumbers.push(userNumber);
    
  }
  //return dei numeri [1,4,66...]
  return userNumbers;
}
/* creo un array di 5 numeri casuali da introdurre poi nell' alert */
var randomNumbers = []; 

// for ( i = 0; i < 5; i++ ) {
//     var number = getRandomNumber(1, 100);
//     randomNumbers.push(number);
// }
// console.log(randomNumbers);

/* e meglio fare un ciclo while in modo che io riesca a controllare--inserisco fino a che non arrivo a length 5-- e poi con includes, controllo che il numero non sia già presente nell'array */
while (randomNumbers.length < 5) {
  var number = getRandomNumber(1, 100)
  if (!randomNumbers.includes(number)) { // costrutto if esegue le parentesi solo quando le condizioni sono VERE in questo cso, col il not davanti deve essere falsa
    randomNumbers.push(number)
  }
}
// console.log(randomNumbers);
/* creo alert contenente 5 numeri casuali generati */
alert("Stanno per arrivare i 5 numeri generati......cerca di ricordarli!")
alert (randomNumbers);

/* Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */
var userNumber;
var numbersWritten = [];
setTimeout(function(){
  alert("Vediamo un po'...Quanti dei numeri riesci a ricordare?! ");
  numbersWritten = writeNumbers();
  console.log(numbersWritten);

// il confronto va inserito all'interno del timing perchè entrambe le liste devono essere gia generate

var guessed = [];

for (var i = 0; i < randomNumbers.length; i ++) {
  if (randomNumbers.includes(numbersWritten[i])) {
    guessed.push(numbersWritten[i]);
  }
}

alert("Hai indovinato " + guessed.length + " numeri su 5.");
console.log("Numeri indovinati: " , guessed);


}, 3000);

/* [8,55,33,77,21].includes(77)
/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

fare check di quali numbersWritten[i] sono presenti in randomNumbers
var numbersWritten;
var randomNumbers; 
*/
// var score = [];
