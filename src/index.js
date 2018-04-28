import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./index.css"
import { makeMainRoutes } from "./routes"
import Auth from "./modules/Auth/Auth"
import registerServiceWorker from "./registerServiceWorker"

const routes = makeMainRoutes()

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
)
registerServiceWorker()
