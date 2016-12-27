document.addEventListener("DOMContentLoaded", function(){
      createCards();
});

var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];

function createCards() {
  for (var i = 0; i < cards.length; i++) {
    var gameBoard = document.getElementById("game-board");
    var cardElement = document.createElement("div");

    cardElement.className = "card";
    cardElement.setAttribute("data-card", cards[i]);
    gameBoard.appendChild(cardElement);
    cardElement.addEventListener("click", isTwoCards);
  }
}

function isMatch(chosenCards) {
  if (chosenCards[0] === chosenCards[1]) {
    alert("You've found a match!");
  } else {
    alert("Sorry try again");
  }
}

function isTwoCards() {
  var cardValue = this.getAttribute("data-card");
  var cardElements = document.getElementsByClassName("card");
  cardsInPlay.push(cardValue);
  if (cardValue === "king") {
    this.innerHTML = "<img src='king.png' />";
  } else {
    this.innerHTML = "<img src='queen.png' />";
  }
  setTimeout(function(){
    if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay = [];
      for (var i = 0; i < cards.length; i++) {
        cardElements[i].innerHTML = "";
      }
    }
  }, 100);
}
