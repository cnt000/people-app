import React from 'react'
import { Redirect, Route, Router } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Callback from './components/Callback'
import Auth from './modules/Auth/Auth'
import history from './modules/History/history'
import Ping from './components/Ping'
import Profile from './components/Profile'
import Admin from './components/Admin'
import MemoryGame from './components/MemoryGame'

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={props => <App auth={auth} {...props} />} />
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/memory-game"
          render={props => <MemoryGame {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props)
            return <Callback {...props} />
          }}
        />
        <Route
          path="/profile"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <Profile auth={auth} {...props} />
            )
          }
        />
        <Route
          path="/ping"
          render={props =>
            !auth.isAuthenticated() ? (
              <Redirect to="/home" />
            ) : (
              <Ping auth={auth} {...props} />
            )
          }
        />
        <Route
          path="/admin"
          render={props =>
            !auth.isAuthenticated() || !auth.userHasScopes(['write:ping']) ? (
              <Redirect to="/home" />
            ) : (
              <Admin auth={auth} {...props} />
            )
          }
        />
      </div>
    </Router>
  )
}
