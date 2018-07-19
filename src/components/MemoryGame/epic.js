import { filter, delay, mapTo } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  SHOW_CARD,
  CHECK_COUPLE,
  INVALID_COUPLE,
  VALID_COUPLE,
  INCORRECT_COUPLE_STATE,
  CORRECT_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
  TIMER_START,
  START_GAME,
} from './constants'

export const memoryGameShowCardEpic = (action$, state$) => {
  return action$.pipe(
    ofType(SHOW_CARD),
    filter(
      () => state$.value.memoryGameReducer.gameState === SECOND_OF_COUPLE_STATE
    ),
    mapTo({ type: CHECK_COUPLE })
  )
}

export const memoryGameCleanSelectedEpic = (action$, state$) => {
  return action$.pipe(
    ofType(CHECK_COUPLE),
    filter(
      () => state$.value.memoryGameReducer.gameState === CORRECT_COUPLE_STATE
    ),
    mapTo({ type: VALID_COUPLE })
  )
}

export const memoryGameHideCoupleEpic = (action$, state$) => {
  return action$.pipe(
    ofType(CHECK_COUPLE),
    filter(
      () => state$.value.memoryGameReducer.gameState === INCORRECT_COUPLE_STATE
    ),
    delay(4000),
    mapTo({ type: INVALID_COUPLE })
  )
}

export const memoryGameTimerStartEpic = (action$) => {
  return action$.pipe(
    ofType(TIMER_START),
    delay(10000),
    mapTo({ type: START_GAME })
  )
}
