document.addEventListener('DOMContentLoaded', function(){
      createCards();
});

function createCards() {
  for (var i = 0; i < 4; i++) {
    var gameBoard = document.getElementById('game-board');
    var card = document.createElement("div");
    card.className = "card";
    gameBoard.appendChild(card);
  }
}

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*if (cardTwo === cardFour) {
  alert('Sorry, try again.');
} else if (cardOne === cardTwo) {
  alert('You found a match!');
} else if (cardThree !== cardFour) {
  alert('You found a match!');
}*/
