const cards = ['AAA', 'BBB', 'AAA', 'DDD', 'BBB', 'DDD']

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const gameState = {
  selectedCards: [],
  cards: cards.map(val => ({ value: val, showed: false })),
}

export default gameState
