function init() {
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
  if (
    window.localStorage.getItem("cards") === undefined ||
    window.localStorage.getItem("cards") === null
  ) {
    window.localStorage.setItem("cards", JSON.stringify(objPeople));
  }
}
function login() {
  var cardNumber = document.getElementById("exampleInputCardNumber").value;
  var pin = document.getElementById("exempleInputPin").value;
  const existingCards = getCardsFromMemory();
  const existingCard = existingCards.find((element) => element.cardNumber === cardNumber);
  if (existingCard === undefined){
    alert("incorrect card number or pin");
  } else {
    var index=existingCards.findIndex((element) => element.cardNumber === cardNumber)
    var sold=existingCards[index].sold;
    curentCard(cardNumber,pin,sold);
    window.location = "./menuPage.html";
    alert("Login was successful");
  }
}
function registerUser() {
  var newCardNumber = {
    cardNumber: document.getElementById("newCardNumber").value,
    pin: document.getElementById("newPin").value,
    sold:0
  };
  const existingCards = getCardsFromMemory();
  const existingCard = existingCards.find((element) => element.cardNumber === newCardNumber.cardNumber);
  if (existingCard !== undefined) {
  	alert("That card number is already in use, please choose another");
  }
  else if (newPin.length < 8) {
	 alert("That is to short, include 8 or more characters");
  }
  curentCard(newCardNumber.cardNumber,newCardNumber.pin,newCardNumber.sold)
  alert("Register sucesfful");
  window.location = "./menuPage.html";
  existingCards.push(newCardNumber);
  updateCardsInMemory(existingCards);
}
function getCardsFromMemory() {
  return JSON.parse(window.localStorage.getItem("cards"));
}
function updateCardsInMemory(updatedCardsArray) {
  window.localStorage.setItem("cards", JSON.stringify(updatedCardsArray));
}
function updateCurentCardsInMemory(updatedCardsArray) {
  window.localStorage.setItem("curentCard", JSON.stringify(updatedCardsArray));
}
function curentCard(cardNumber,pin,sold){
  var card={
    cardNumber:cardNumber,
    pin:pin,
    sold:sold,
  }
  window.localStorage.setItem("curentCard", JSON.stringify(card));
}
function exit(){
  window.localStorage.removeItem("curentCard");
}
function changePin(){
 const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
 const existingCards = getCardsFromMemory();
 pinIndex = existingCards.findIndex((obj => obj.pin == curentCard.pin));
 pinNou =parseInt(document.getElementById("newPin").value);
 existingCards[pinIndex].pin = pinNou;
 curentCard.pin=pinNou;
 updateCurentCardsInMemory(curentCard);
 updateCardsInMemory(existingCards);
}
function seeSold(){
  const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
  document.getElementById("sold").innerHTML=curentCard.sold;
}
function incrementSold(){
 const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
 const existingCards = getCardsFromMemory();
 soldIndex = existingCards.findIndex((obj => obj.sold == curentCard.sold));
 soldNou = parseInt(curentCard.sold) + parseInt(document.getElementById("newSold").value);
 existingCards[soldIndex].sold = soldNou;
 curentCard.sold=soldNou;
 updateCurentCardsInMemory(curentCard);
 updateCardsInMemory(existingCards);
}
function decrementSold(){
  const curentCard=JSON.parse(window.localStorage.getItem("curentCard"));
  const existingCards = getCardsFromMemory();
  soldIndex = existingCards.findIndex((obj => obj.sold == curentCard.sold));
  if(curentCard.sold>=document.getElementById("newSold").value){
  soldNou = parseInt(curentCard.sold) - parseInt(document.getElementById("newSold").value);
  existingCards[soldIndex].sold = soldNou;
  curentCard.sold=soldNou;
  updateCurentCardsInMemory(curentCard);
  updateCardsInMemory(existingCards);}
  else{
    alert("soldul indisponibil")
  }
}

function logOut(){
  
}