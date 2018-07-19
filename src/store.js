import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import {
  memoryGameShowCardEpic,
  memoryGameCleanSelectedEpic,
  memoryGameHideCoupleEpic,
  memoryGameTimerStartEpic
} from './components/MemoryGame/epic'
import { memoryGameReducer } from './components/MemoryGame/reducer'

export const history = createHistory()

const initialState = {}
const enhancers = []

const epicMiddleware = createEpicMiddleware()
const middleware = [routerMiddleware(history), epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const reducer = combineReducers({
  routerReducer,
  memoryGameReducer,
})

export const rootEpic = combineEpics(
  memoryGameShowCardEpic,
  memoryGameCleanSelectedEpic,
  memoryGameHideCoupleEpic,
  memoryGameTimerStartEpic,
)

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(reducer, initialState, composedEnhancers)

epicMiddleware.run(rootEpic)

export default store
