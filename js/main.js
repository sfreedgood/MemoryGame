var cards = [
    {
        rank: "queen",
        suit: "diamonds",
        cardImg: "images/images/queen-of-diamonds.png"
    },
    {
        rank: "queen",
        suit: "hearts",
        cardImg: "images/images/queen-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImg: "images/images/king-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImg: "images/images/king-of-hearts.png"
    },
];
var cardsInPlay = [];

function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("src", (cards[cardId].cardImg));
    if (cardsInPlay.length === 2){
        checkMatch();
    }
}

function createBoard(){
    for (var i = 0; i < cards.length; i++){
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("gameBoard").appendChild(cardElement);
    }
}

function checkMatch(cardId){
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }else{
        alert("Sorry, try again")
    } 
}

createBoard();

/*
Future Features:
-reset button
-score counter
-card position randomizer
-more cards
*/
