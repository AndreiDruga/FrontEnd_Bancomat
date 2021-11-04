
var objPeople = [
  {
    cardNumber: "1234",
    pin: "12345678",
    sold:"123",
  },
  {
    cardNumber: "123456",
    pin: "123456789",
    sold:"1230",
  },
  {
    cardNumber: "chris",
    pin: "password3",
    sold:"123",
  },
];

function init() {
  
  
  if (
    window.localStorage.getItem("cards") === undefined ||
    window.localStorage.getItem("cards") === null
  ) {
    window.localStorage.setItem("cards", JSON.stringify(objPeople));
  }
}

// log in card user
function login() {
  var cardNumber = document.getElementById("exampleInputCardNumber").value;
  var pin = document.getElementById("exempleInputPin").value;
  const existingCards = getCardsFromMemory();
  const existingCard = existingCards.find(
    (element) => element.cardNumber === cardNumber && element.pin === pin 
    );
  const index =  existingCards.findIndex(
  (element) => element.cardNumber === cardNumber && element.pin === pin 
  );
  var sold=objPeople[index].sold;
  if (existingCard === undefined) {
    alert("incorrect card number or pin");
  } else {
    curentCard(cardNumber,pin,sold);
    window.location = "./menuPage.html";
     alert("Login was successful");
  }
}

// register user
function registerUser() {
  var newCardNumber = {
    cardNumber: document.getElementById("newCardNumber").value,
    pin: document.getElementById("newPin").value,
  };
  const existingCards = getCardsFromMemory();
  const existingCard = existingCards.find(
    (element) => element.cardNumber === newCardNumber.cardNumber
  );

  if (existingCard !== undefined) {
	alert("That card number is alreat in user, please choose another");
  } else if (newPin.length < 8) {
	alert("That is to short, include 8 or more characters");
  }
  alert("Register sucesfful");
  window.location = "./menuPage.html";
  existingCards.push(newCardNumber);
  updateCardsInMemory(existingCards);
}

function curentCard(cardNumber,pin,sold){
  var card={
    cardNumber:cardNumber,
    pin:pin,
    sold:sold,
  }
  window.localStorage.setItem("curentCard", JSON.stringify(card));
}

function getCardsFromMemory() {
  return JSON.parse(window.localStorage.getItem("cards"));
}

function updateCardsInMemory(updatedCardsArray) {
  window.localStorage.setItem("cards", JSON.stringify(updatedCardsArray));
}

function exit(){
  localStorage.clear();
}

function changePin(){
  const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
  console.log(curentCard.pin)
}

function seeSold(){
  const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
  document.getElementById("sold").innerHTML=curentCard.sold;
}

function incrementSold(){
 const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
 curentCard.sold=parseInt(curentCard.sold)    +
 parseInt(document.getElementById("newSold").value);
  console.log(curentCard.sold);
 updateCardsInMemory(curentCard);
}

