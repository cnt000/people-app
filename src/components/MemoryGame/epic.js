import { Observable } from "rxjs"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delayWhen'
import 'rxjs/add/operator/mapTo'
import { interval } from 'rxjs'
import { SHOW_CARD, CHECK_SELECTED_CARDS } from "./constants"

export const memoryGameEpic = action$ => {
  return action$.ofType(SHOW_CARD)
  .mapTo({ type: CHECK_SELECTED_CARDS })
}

export const memoryGameHideEpic = (action$, state$) => {
  return action$.ofType(CHECK_SELECTED_CARDS)
  .delayWhen(evt => (!state$.isChecking) ? interval(4000) : '')
  .mapTo({ type: 'HIDE_SELECTED_CARDS' })
}