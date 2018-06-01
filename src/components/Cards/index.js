import React from "react"
import styled from "styled-components"
import Card from "../Card"

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`
const Cards = props => 
  <Ul>
    {props.cards.map(card =>
      <li><Card value={card.value} visible={card.visible} showed={card.showed} /></li>
    )}
  </Ul>

export default Cards