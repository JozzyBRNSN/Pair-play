import Card from './game.js';

let cardsCount = 8,
    cardsNumberArray = [],
    cardArray = [],
    firstCard = null,
    secondCard  = null

function newGame(container, cardsCount) {
  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i);
    cardsNumberArray.push(i);
  }

  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardsNumberArray) {
    cardArray.push(new Card(container, cardNumber, flip));
  }

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number !== secondCard.number) {
        firstCard.open = false;
        firstCard.open = false;
        firstCard = null;
        firstCard = null;
      }
    }

    if (firstCard === null) {
      firstCard = card;
    } else {
      if (secondCard === null) {
        secondCard = card;
      }
    }
  }

  if (firstCard !== null && secondCard !== null) {
    if (firstCard.number === secondCard.number) {
      firstCard.success = true;
      firstCard.success = true;
      firstCard = null;
      firstCard = null;
    }
  }
}

newGame(document.getElementById('game'), cardsCount);
