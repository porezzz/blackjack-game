import cards from '../json/cards.json'
const drawCards = () => {
    // const cards = ['Ace of Clubs', 'King of Diamonds', '10 of Hearts', 'Queen of Spades', '5 of hearts', '3 of hearts', '2 of hearts', '8 of hearts', '4 of hearts']
    // console.log(cards.Cards[1])
    const randomCard = cards.Cards[Math.floor(Math.random() * cards.Cards.length)]
    return randomCard;
    // player gets a random card
}

export default drawCards