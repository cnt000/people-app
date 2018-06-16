import { fromJS } from 'immutable';

import {
  LOAD_CARDS,
  SHOW_CARD
} from './constants';
import defaultState from "../../defaultState"

// The initial state of the App
const initialState = /*fromJS*/(defaultState);

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return state
        //.set('loading', false)
        //.set('error', false)
    case SHOW_CARD:
      return { ...state, cards: state.cards.map((elm, i) => (i == action.cardPosition) ? { ...elm, showed: true } : elm) }
    default:
      return state;
  }
}

export default appReducer;