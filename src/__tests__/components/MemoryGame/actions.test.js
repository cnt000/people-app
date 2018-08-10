import {
  LOAD_CARDS,
  SHOW_CARD,
  CHECK_COUPLE,
  TIMER_START,
} from '../../../components/MemoryGame/constants'
import {
  loadCards,
  showCard,
  checkCouple,
  startGame,
} from '../../../components/MemoryGame/actions'

describe('actions', () => {
  it('should create an action to loadCards', () => {
    const expectedAction = {
      type: LOAD_CARDS,
    }
    expect(loadCards()).toEqual(expectedAction)
  })

  it('should create an action to show a card', () => {
    const expectedAction = {
      type: SHOW_CARD,
      cardPosition: 3,
    }
    expect(showCard(3)).toEqual(expectedAction)
  })

  it('should create an action to start game', () => {
    const expectedAction = {
      type: TIMER_START,
    }
    expect(startGame()).toEqual(expectedAction)
  })

  it('should create an action to check for a couple', () => {
    const expectedAction = {
      type: CHECK_COUPLE,
    }
    expect(checkCouple()).toEqual(expectedAction)
  })
})
