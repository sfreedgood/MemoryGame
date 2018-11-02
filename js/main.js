var cards = [
    {
        rank: "queen",
        suit: "diamonds",
        cardImg: "images/queen-of-diamonds.png"
    },
    {
        rank: "queen",
        suit: "hearts",
        cardImg: "images/queen-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImg: "images/king-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImg: "images/king-of-hearts.png"
    },
];
var cardsInPlay = [];

function checkMatch(){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
        }else{
            alert("Sorry, try again")
        }
    } 
}
function flipCard(cardId){
    console.log("User flipped: " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImg);
    console.log(cards[cardId].suit);
    checkMatch();
}

flipCard(0);
flipCard(2);
/*
var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = cards[1];
var cardFour = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardFour);
console.log("User flipped ", cardsInPlay[0]);
console.log("User flipped ", cardsInPlay[1]);

if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }else{
        alert("Sorry, try again")
    }
}
*/