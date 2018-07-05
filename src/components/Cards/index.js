import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import MemoryGameStart from '../MemoryGameStart'
import Card from '../Card'

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
`

const Div = styled.div`
  width: 90vw;
  height: 90vh;
  border: 1px solid black;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 170% 100%;
  animation: ${gradient} 15s ease infinite;
  border-radius: 0.25em;
  padding: 0.4em;
`

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  margin: 0;
  padding: 0;
`
const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Cards = ({ cards, gameStateId, isPlaying, startGame, showCard }) => (
  <Div>
    <h1>gameStateId: {gameStateId}</h1>

    {gameStateId === 5 && <p>HAI VINTO!!!!</p>}
    {!isPlaying && <MemoryGameStart onClick={() => startGame()} />}
    {isPlaying && (
      <Ul>
        {cards &&
          cards.map((card, position) => (
            <Li key={position}>
              <Card
                value={card.value}
                showed={card.showed}
                onClick={() =>
                  gameStateId === 0 || gameStateId === 1
                    ? showCard(position)
                    : ''
                }
              />
            </Li>
          ))}
      </Ul>
    )}
  </Div>
)

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      showed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
}

export default Cards
