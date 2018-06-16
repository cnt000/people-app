import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import memoryGameReducer from "./components/MemoryGame/reducer"
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const reducer = combineReducers({
  routerReducer,
  memoryGameReducer
})

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
