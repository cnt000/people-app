import React from "react"
import styled from "styled-components"

import Cards from "../Cards"
import cards from "../../defaultState"

const MemoryGame = props => (
  <Cards cards={cards} />
)

export default MemoryGame