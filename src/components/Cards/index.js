import React from "react"
import styled, { keyframes } from "styled-components"
import Card from "../Card"

const gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 170% 100%;
  animation: ${gradient} 15s ease infinite;
  border-radius: 0.25em;
  padding: 1em;
`

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
`
const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Cards = props => 
  <Div>
    <Ul>
      {props.cards.map((card, i) =>
        <Li key={i}>
          <Card
            value={card.value}
            visible={card.visible}
            showed={card.showed}
          />
        </Li>
      )}
    </Ul>
  </Div>

export default Cards
