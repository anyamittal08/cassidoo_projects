const SUITS = ['hearts', 'clubs', 'diamonds', 'spades'];
const NUMBERS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    newDeck() {
        this.deck = []
        for (let i=0; i < SUITS.length; i++) {
            for (let j=0; j<NUMBERS.length; j++) {
                let card = new Card(NUMBERS[j], SUITS[i]);
                this.deck.push(card);
            }
        }       
        return this.deck;
    }

    shuffleDeck() {
        for (let i=0; i<1000; i++) {
            let index1 = Math.floor(Math.random() * this.deck.length);

            let index2 = Math.floor(Math.random() * this.deck.length);

            let temp = this.deck[index1];

            this.deck[index1] = this.deck[index2];
            this.deck[index2] = temp;
        }

        return this.deck;
    }
}

const deck = new Deck;

console.log(deck.newDeck())

console.log(deck.shuffleDeck())

console.log(deck.newDeck())

console.log(deck.shuffleDeck())


