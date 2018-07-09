import {
  START_GAME,
  LOAD_CARDS,
  SHOW_CARD,
  CHECK_COUPLE,
  INVALID_COUPLE,
  VALID_COUPLE,
  PLAYING_STATE,
  FIRST_OF_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
  CORRECT_COUPLE_STATE,
  INCORRECT_COUPLE_STATE,
  FINISHED_GAME_STATE,
} from './constants'
import defaultState from '../../defaultState'

export function memoryGameReducer(state = defaultState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameState: PLAYING_STATE,
        cards: state.cards.map(card => ({ ...card, showed: false })),
      }

    case LOAD_CARDS:
      return state

    case SHOW_CARD:
      return {
        ...state,
        gameState:
          state.cards.filter(val => !val.showed).length > 1
            ? getNextGameState(state.gameState)
            : FINISHED_GAME_STATE,
        selectedCards: [action.cardPosition, ...state.selectedCards],
        cards: showClickedCard(state.cards, action.cardPosition),
      }

    case CHECK_COUPLE:
      const firstCardPosition = state.selectedCards[0]
      const secondCartPosition = state.selectedCards[1]
      const isCoupleEqual = equal(
        state.cards[firstCardPosition].value,
        state.cards[secondCartPosition].value
      )
      return {
        ...state,
        gameState: isCoupleEqual
          ? CORRECT_COUPLE_STATE
          : INCORRECT_COUPLE_STATE,
      }

    case VALID_COUPLE:
      return { ...state, gameState: PLAYING_STATE, selectedCards: [] }

    case INVALID_COUPLE:
      return {
        ...state,
        gameState: PLAYING_STATE,
        selectedCards: [],
        cards: hideCards(state.cards, state.selectedCards),
      }

    default:
      return state
  }
}

function equal(a, b) {
  return a === b
}

function getNextGameState(gameState) {
  let nextGameState = PLAYING_STATE
  if (gameState === PLAYING_STATE) {
    nextGameState = FIRST_OF_COUPLE_STATE
  } else if (gameState === FIRST_OF_COUPLE_STATE) {
    nextGameState = SECOND_OF_COUPLE_STATE
  } else if (
    gameState === CORRECT_COUPLE_STATE ||
    gameState === INCORRECT_COUPLE_STATE
  ) {
    nextGameState = FIRST_OF_COUPLE_STATE
  }
  return nextGameState
}

function showClickedCard(cards, cardPosition) {
  return cards.map(
    (elm, i) =>
      i === cardPosition
        ? {
            ...elm,
            showed: true,
          }
        : elm
  )
}

function hideCards(cards, selectedCards) {
  return cards.map(
    (elm, i) =>
      selectedCards.includes(i)
        ? {
            ...elm,
            showed: false,
          }
        : elm
  )
}
