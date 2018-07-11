import {
  PLAYING_STATE,
  FIRST_OF_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
} from './constants'

export function equal(a, b) {
  return a === b
}

export function getNextGameState(gameState) {
  switch (gameState) {
    case PLAYING_STATE:
      return FIRST_OF_COUPLE_STATE
    case FIRST_OF_COUPLE_STATE:
      return SECOND_OF_COUPLE_STATE
    default:
      return PLAYING_STATE
  }
}

export function showCard(cardPosition) {
  return function onMap(elm, i) {
    return i === cardPosition
      ? {
          ...elm,
          showed: true,
        }
      : elm
  }
}

export function hideCards(selectedCards) {
  return function onMap(elm, i) {
    return selectedCards.includes(i)
      ? {
          ...elm,
          showed: false,
        }
      : elm
  }
}
