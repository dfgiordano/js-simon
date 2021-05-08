/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi. */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

var randomNumbers = []; 

/* e meglio fare un ciclo while in modo che io riesca a controllare--inserisco fino a che non arrivo a length 5-- e poi con includes, controllo che il numero non sia già presente nell'array */
while (randomNumbers.length < 5) {
  var number = getRandomNumber(1, 100)
  if (!randomNumbers.includes(number)) { // costrutto if esegue le parentesi solo quando le condizioni sono VERE in questo cso, col il not davanti deve essere falsa
    randomNumbers.push(number)
  }
}
/* creo alert contenente 5 numeri casuali generati */
alert("Stanno per arrivare i 5 numeri generati......cerca di ricordarli!")
alert (randomNumbers);

/* Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). */
var userNumber;
var numbersWritten = [];
setTimeout(function(){
  alert("Vediamo un po'...Quanti dei numeri riesci a ricordare?! ");
  while (numbersWritten.length < 5) {
    var userNumber = parseInt(prompt("Inserisci un numero che ricordi"));
    if (!numbersWritten.includes(userNumber)) { 
      numbersWritten.push(userNumber);
    }
  }
  console.log(numbersWritten);

// il confronto va inserito all'interno del timing perchè entrambe le liste devono essere gia generate

var guessed = [];

for (var i = 0; i < numbersWritten.length; i ++) {
  if (randomNumbers.includes(numbersWritten[i])) {
    guessed.push(numbersWritten[i]);
  }
}

alert("Hai indovinato " + guessed.length + " numeri su 5.");
console.log("Numeri indovinati: " , guessed);


}, 30000) ;
