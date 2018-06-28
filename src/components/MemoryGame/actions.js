import {
  LOAD_CARDS,
  SHOW_CARD,
  START_GAME
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

export function startGame() {
  return {
    type: START_GAME
  }
}