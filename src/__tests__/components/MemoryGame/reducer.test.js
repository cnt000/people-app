import { memoryGameReducer } from '../../../components/MemoryGame/reducer'
import {
  START_GAME,
  PLAYING_STATE,
  LOAD_CARDS,
  SHOW_CARD,
  CHECK_COUPLE,
  FINISHED_GAME_STATE,
  FIRST_OF_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
  CORRECT_COUPLE_STATE,
  INCORRECT_COUPLE_STATE,
  VALID_COUPLE,
  INVALID_COUPLE,
} from '../../../components/MemoryGame/constants'
import defaultState from '../../../defaultState'

describe('MemoryGame reducer', () => {
  it('should return the state', () => {
    expect(memoryGameReducer({}, {})).toEqual({})
  })

  it('should return the deafult state', () => {
    expect(memoryGameReducer()).toEqual(defaultState)
  })

  it('should handle START_GAME', () => {
    expect(
      memoryGameReducer(
        {
          cards: [{ showed: true }, { showed: true }],
        },
        {
          type: START_GAME,
        }
      )
    ).toEqual({
      cards: [{ showed: false }, { showed: false }],
      gameState: PLAYING_STATE,
    })
  })

  it('should handle LOAD_CARDS', () => {
    expect(
      memoryGameReducer(
        {
          cards: [],
        },
        {
          type: LOAD_CARDS,
        }
      )
    ).toEqual({
      cards: [],
    })
  })

  it('should handle SHOW_CARD', () => {
    expect(
      memoryGameReducer(
        {
          cards: [{ showed: false }, { showed: false }],
          selectedCards: [],
        },
        {
          type: SHOW_CARD,
          cardPosition: 1,
        }
      )
    ).toEqual({
      cards: [{ showed: false }, { showed: true }],
      selectedCards: [1],
      gameState: PLAYING_STATE,
    })
  })

  expect(
    memoryGameReducer(
      {
        cards: [{ showed: false }, { showed: true }, { showed: false }],
        selectedCards: [],
        gameState: PLAYING_STATE,
      },
      {
        type: SHOW_CARD,
        cardPosition: 0,
      }
    )
  ).toEqual({
    cards: [{ showed: true }, { showed: true }, { showed: false }],
    selectedCards: [0],
    gameState: FIRST_OF_COUPLE_STATE,
  })

  expect(
    memoryGameReducer(
      {
        cards: [
          { showed: true },
          { showed: false },
          { showed: false },
          { showed: false },
        ],
        selectedCards: [0],
        gameState: FIRST_OF_COUPLE_STATE,
      },
      {
        type: SHOW_CARD,
        cardPosition: 1,
      }
    )
  ).toEqual({
    cards: [
      { showed: true },
      { showed: true },
      { showed: false },
      { showed: false },
    ],
    selectedCards: [1, 0],
    gameState: SECOND_OF_COUPLE_STATE,
  })

  expect(
    memoryGameReducer(
      {
        cards: [
          { showed: true },
          { showed: true },
          { showed: false },
          { showed: false },
        ],
        selectedCards: [0, 1],
      },
      {
        type: SHOW_CARD,
        cardPosition: 2,
      }
    )
  ).toEqual({
    cards: [
      { showed: true },
      { showed: true },
      { showed: true },
      { showed: false },
    ],
    selectedCards: [2, 0, 1],
    gameState: PLAYING_STATE,
  })

  expect(
    memoryGameReducer(
      {
        cards: [{ showed: false }, { showed: true }],
        selectedCards: [1],
      },
      {
        type: SHOW_CARD,
        cardPosition: 0,
      }
    )
  ).toEqual({
    cards: [{ showed: true }, { showed: true }],
    selectedCards: [0, 1],
    gameState: FINISHED_GAME_STATE,
  })

  it('should handle CHECK_COUPLE', () => {
    expect(
      memoryGameReducer(
        {
          cards: [
            { showed: true, value: 'A' },
            { showed: true, value: 'A' },
            { showed: false, value: 'B' },
            { showed: false, value: 'B' },
          ],
          selectedCards: [0, 1],
        },
        {
          type: CHECK_COUPLE,
        }
      )
    ).toEqual({
      cards: [
        { showed: true, value: 'A' },
        { showed: true, value: 'A' },
        { showed: false, value: 'B' },
        { showed: false, value: 'B' },
      ],
      selectedCards: [0, 1],
      gameState: CORRECT_COUPLE_STATE,
    })

    expect(
      memoryGameReducer(
        {
          cards: [
            { showed: true, value: 'A' },
            { showed: false, value: 'A' },
            { showed: true, value: 'B' },
            { showed: false, value: 'B' },
          ],
          selectedCards: [0, 2],
        },
        {
          type: CHECK_COUPLE,
        }
      )
    ).toEqual({
      cards: [
        { showed: true, value: 'A' },
        { showed: false, value: 'A' },
        { showed: true, value: 'B' },
        { showed: false, value: 'B' },
      ],
      selectedCards: [0, 2],
      gameState: INCORRECT_COUPLE_STATE,
    })

    expect(
      memoryGameReducer(
        {
          cards: [
            { showed: true, value: 'A' },
            { showed: true, value: 'A' },
            { showed: false, value: 'B' },
            { showed: false, value: 'B' },
          ],
          selectedCards: [0, 1],
        },
        {
          type: VALID_COUPLE,
        }
      )
    ).toEqual({
      cards: [
        { showed: true, value: 'A' },
        { showed: true, value: 'A' },
        { showed: false, value: 'B' },
        { showed: false, value: 'B' },
      ],
      selectedCards: [],
      gameState: PLAYING_STATE,
    })

    expect(
      memoryGameReducer(
        {
          cards: [
            { showed: true, value: 'A' },
            { showed: true, value: 'B' },
            { showed: false, value: 'A' },
            { showed: false, value: 'B' },
          ],
          selectedCards: [0, 1],
        },
        {
          type: INVALID_COUPLE,
        }
      )
    ).toEqual({
      cards: [
        { showed: false, value: 'A' },
        { showed: false, value: 'B' },
        { showed: false, value: 'A' },
        { showed: false, value: 'B' },
      ],
      selectedCards: [],
      gameState: PLAYING_STATE,
    })
  })
})
