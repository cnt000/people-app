import { Observable } from "rxjs"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/mapTo'
import { SHOW_CARD, CHECK_SELECTED_CARDS } from "./constants"

export const memoryGameEpic = action$ => {
  return action$.ofType(SHOW_CARD)
  .delay(3000)
  .mapTo({ type: CHECK_SELECTED_CARDS })
}