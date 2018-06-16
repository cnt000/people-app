import { fromJS } from 'immutable';

import {
  LOAD_CARDS,
  SHOW_CARD
} from './constants';
import defaultState from "../../defaultState"

// The initial state of the App
const initialState = /*fromJS*/(defaultState);

function cardClicked(state, action) {
  let newState = {}
  const options = state.selectedCards.length
  
  switch(options) {
    case 0:
      newState = { ...state, selectedCards: [ action.cardPosition], cards: state.cards.map((elm, i) => (i == action.cardPosition) ? { ...elm, showed: true } : elm) }
    break;
    case 1:
      if(state.cards[action.cardPosition].value === state.cards[state.selectedCards[0]].value) {
        newState = { ...state, selectedCards: [], cards: state.cards.map((elm, i) => (i == action.cardPosition) ? { ...elm, showed: true, matched: true } : elm) }
      } else {
        newState = { ...state, selectedCards: [], cards: state.cards.map((elm, i) => (i == state.selectedCards[0]) ? { ...elm, showed: false } : elm) }
      }
    break;
    default:
      newState = { ...state }
  }

  return newState;

}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return state
        //.set('loading', false)
        //.set('error', false)
    case SHOW_CARD:
      return cardClicked(state, action)
    default:
      return state;
  }
}

export default appReducer;