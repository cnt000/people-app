import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import {
  SHOW_CARD,
  CHECK_COUPLE,
  INVALID_COUPLE,
  VALID_COUPLE,
} from './constants'

export const memoryGameShowCardEpic = (action$, state$) => {
  return action$
    .ofType(SHOW_CARD)
    .filter(() => state$.value.memoryGameReducer.gameStateId === 2)
    .mapTo({ type: CHECK_COUPLE })
}

export const memoryGameCleanSelectedEpic = (action$, state$) => {
  return action$
    .ofType(CHECK_COUPLE)
    .filter(() => state$.value.memoryGameReducer.gameStateId === 3)
    .mapTo({ type: VALID_COUPLE })
}

export const memoryGameHideCoupleEpic = (action$, state$) => {
  return action$
    .ofType(CHECK_COUPLE)
    .filter(() => state$.value.memoryGameReducer.gameStateId === 4)
    .delay(4000)
    .mapTo({ type: INVALID_COUPLE })
}
