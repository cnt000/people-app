import {
  START_GAME,
  LOAD_CARDS,
  SHOW_CARD,
  CHECK_COUPLE,
  INVALID_COUPLE,
  VALID_COUPLE,
  PLAYING_STATE,
  CORRECT_COUPLE_STATE,
  INCORRECT_COUPLE_STATE,
  FINISHED_GAME_STATE,
} from './constants'
import { showCard, hideCards, equal, getNextGameState } from './helper'
import defaultState from '../../defaultState'

export function memoryGameReducer(state = defaultState, action = { type: '' }) {
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
      const hasNextGameState = state.cards.filter(val => !val.showed).length > 1
      return {
        ...state,
        gameState:
          (hasNextGameState) 
            ? getNextGameState(state.gameState) : FINISHED_GAME_STATE,
        selectedCards: [action.cardPosition, ...state.selectedCards],
        cards: state.cards.map(showCard(action.cardPosition)),
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
        cards: state.cards.map(hideCards(state.selectedCards)),
      }

    default:
      return state
  }
}
