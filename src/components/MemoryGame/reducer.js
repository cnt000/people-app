import {
  START_GAME,
  LOAD_CARDS,
  SHOW_CARD,
  CHECK_COUPLE,
  INVALID_COUPLE,
  VALID_COUPLE,
} from './constants'
import defaultState from '../../defaultState'

export function memoryGameReducer(state = defaultState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        playing: true,
        checking: false,
        gameStateId: 0,
        cards: state.cards.map(card => ({ ...card, showed: false })),
      }
    case LOAD_CARDS:
      return state
    case SHOW_CARD:
      let nextGameStateId = 0
      if (state.gameStateId === 0) {
        nextGameStateId = 1
      } else if (state.gameStateId === 1) {
        nextGameStateId = 2
      } else if ([3, 4].includes(state.gameStateId)) {
        nextGameStateId = 1
      }
      nextGameStateId =
        state.cards.filter(val => !val.showed).length > 1 ? nextGameStateId : 5
      return {
        ...state,
        gameStateId: nextGameStateId,
        selectedCards: [action.cardPosition, ...state.selectedCards],
        cards: state.cards.map(
          (elm, i) =>
            i === action.cardPosition
              ? {
                  ...elm,
                  showed: true,
                }
              : elm
        ),
      }
    case CHECK_COUPLE:
      console.log('CHECK_COUPLE')
      return {
        ...state,
        gameStateId:
          state.cards[state.selectedCards[0]].value ===
          state.cards[state.selectedCards[1]].value
            ? 3
            : 4,
      }
    case VALID_COUPLE:
      console.log('CLEAN_SELECTED')
      return { ...state, gameStateId: 0, selectedCards: [] }
    case INVALID_COUPLE:
      console.log('HIDE_COUPLE')
      return {
        ...state,
        gameStateId: 0,
        selectedCards: [],
        cards: state.cards.map(
          (elm, i) =>
            state.selectedCards.includes(i)
              ? {
                  ...elm,
                  showed: false,
                }
              : elm
        ),
      }
    default:
      return state
  }
}
