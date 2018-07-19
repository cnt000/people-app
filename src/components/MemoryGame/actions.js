import { LOAD_CARDS, SHOW_CARD, CHECK_COUPLE, TIMER_START } from './constants'

export function loadCards() {
  return {
    type: LOAD_CARDS,
  }
}

export function showCard(cardPosition) {
  return {
    type: SHOW_CARD,
    cardPosition,
  }
}

export function startGame() {
  return {
    type: TIMER_START,
  }
}

export function checkCouple() {
  return {
    type: CHECK_COUPLE,
  }
}
