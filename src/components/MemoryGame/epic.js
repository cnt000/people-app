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
