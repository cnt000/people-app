import {
  LOAD_CARDS,
  SHOW_CARD
} from './constants';

export function loadCards() {
  return {
    type: LOAD_CARDS
  }
}

export function showCard(cardPosition) {
  return {
    type: SHOW_CARD,
    cardPosition
  }
}
