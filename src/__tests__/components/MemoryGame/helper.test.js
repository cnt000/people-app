import {
  PLAYING_STATE,
  FIRST_OF_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
  CORRECT_COUPLE_STATE,
  INCORRECT_COUPLE_STATE,
} from '../../../components/MemoryGame/constants'
import {
  equal,
  getNextGameState,
  showCard,
  hideCards,
} from '../../../components/MemoryGame/helper'

describe('showCard', () => {
  it('show a card', () => {
    const cards = [{ showed: true }, { showed: false }]
    const result = [{ showed: true }, { showed: true }]
    expect(cards.map(showCard(1))).toEqual(result)
  })
  it('show a card non existent', () => {
    const cards = [{ showed: true }, { showed: false }]
    const result = [{ showed: true }, { showed: false }]
    expect(cards.map(showCard(2))).toEqual(result)
  })
})

describe('hideCards', () => {
  it('hide couple of cards', () => {
    const cards = [{ showed: true }, { showed: true }, { showed: false }]
    const result = [{ showed: false }, { showed: false }, { showed: false }]
    expect(cards.map(hideCards([0, 1]))).toEqual(result)
  })
  it('hide a couple non existent', () => {
    const cards = [{ showed: true }, { showed: true }, { showed: false }]
    const result = [{ showed: true }, { showed: true }, { showed: false }]
    expect(cards.map(hideCards([3, 4]))).toEqual(result)
  })
})

describe('equal', () => {
  it('if equal, return true', () => {
    expect(equal(1, 1)).toEqual(true)
  })
  it('if not equal, return false', () => {
    expect(equal('a', 'b')).toEqual(false)
  })
})

describe('getNextGameState', () => {
  it('return default state', () => {
    expect(getNextGameState()).toEqual(PLAYING_STATE)
  })
  it('if PLAYING_STATE return FIRST_OF_COUPLE_STATE', () => {
    expect(getNextGameState(PLAYING_STATE)).toEqual(FIRST_OF_COUPLE_STATE)
  })
  it('if FIRST_OF_COUPLE_STATE return SECOND_OF_COUPLE_STATE', () => {
    expect(getNextGameState(FIRST_OF_COUPLE_STATE)).toEqual(
      SECOND_OF_COUPLE_STATE
    )
  })
  it('if SECOND_OF_COUPLE_STATE return PLAYING_STATE', () => {
    expect(getNextGameState(SECOND_OF_COUPLE_STATE)).toEqual(PLAYING_STATE)
  })
  it('if CORRECT_COUPLE_STATE return PLAYING_STATE', () => {
    expect(getNextGameState(CORRECT_COUPLE_STATE)).toEqual(PLAYING_STATE)
  })
  it('if INCORRECT_COUPLE_STATE return PLAYING_STATE', () => {
    expect(getNextGameState(INCORRECT_COUPLE_STATE)).toEqual(PLAYING_STATE)
  })
})
