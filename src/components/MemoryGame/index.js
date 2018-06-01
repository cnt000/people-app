import React from "react"
import Cards from "../Cards"

const cards = [
  {
    value: "A",
    visible: true,
    showed: false
  },
  {
    value: "B",
    visible: true,
    showed: true
  },
  {
    value: "C",
    visible: false,
    showed: false
  },
  {
    value: "D",
    visible: false,
    showed: false
  },
  {
    value: "A",
    visible: false,
    showed: false
  },
  {
    value: "B",
    visible: false,
    showed: false
  },
  {
    value: "C",
    visible: false,
    showed: false
  },
  {
    value: "D",
    visible: false,
    showed: false
  }
]

const MemoryGame = props => (
  <Cards cards={cards} />
)

export default MemoryGame