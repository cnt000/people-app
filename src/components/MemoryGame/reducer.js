import {
  START_GAME,
  LOAD_CARDS,
  SHOW_CARD,
  CHECK_SELECTED_CARDS
} from './constants';
import defaultState from "../../defaultState"

function cardClicked(state, action) {
  const options = state.selectedCards.length

  if(options > 1)
    return (state.cards[state.selectedCards[0]].value !== state.cards[state.selectedCards[1]].value) 
      ? { ...state,
        selectedCards: [],
        cards: state.cards.map((elm, i) =>
          (i === state.selectedCards[0] || i === state.selectedCards[1]) ? { ...elm,
            showed: false
          } : elm)
      }
      : { ...state, selectedCards: [] }
  else
    return {
      ...state
    }
}

export function memoryGameReducer(state = defaultState, action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, playing: true }
    case LOAD_CARDS:
      return state
    case SHOW_CARD:
      return (state.selectedCards.length < 2) ? { ...state,
        selectedCards: [action.cardPosition, ...state.selectedCards],
        cards: state.cards.map((elm, i) => (i === action.cardPosition) ? { ...elm,
          showed: true
        } : elm)
      } : { ...state }
    case CHECK_SELECTED_CARDS:
      return cardClicked(state, action)
    default:
      return state
  }
}