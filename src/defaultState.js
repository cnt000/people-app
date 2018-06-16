const cards = [
  {
    value: 0,
    showed: false
  },
  {
    value: 1,
    showed: true
  },
  {
    value: 2,
    showed: false
  },
  {
    value: "D",
    showed: false
  },
  {
    value: "A",
    showed: false
  },
  {
    value: "B",
    showed: false
  },
  {
    value: "C",
    showed: false
  },
  {
    value: "D",
    showed: false
  }
]

const gameState = {
  playing: false,
  selectedCards: [],
  cards
}

export default gameState