const cards = ['AAA', 'BBB', 'AAA', 'DDD', 'BBB', 'DDD']

const gameState = {
  selectedCards: [],
  cards: cards.map(val => ({ value: val, showed: false })),
}

export default gameState
