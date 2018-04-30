import React, { Component } from "react"
import { Navbar, Button } from "react-bootstrap"
import "./App.css"

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login()
  }

  logout() {
    this.props.auth.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Button
              className="btn-margin"
              onClick={this.goTo.bind(this, "home")}
            >
              Home
            </Button>
            <Button
              className="btn-margin"
              onClick={this.goTo.bind(this, "ping")}
            >
              Ping
            </Button>
            {!isAuthenticated() && (
              <Button className="btn-margin" onClick={this.login.bind(this)}>
                Log In
              </Button>
            )}
            {isAuthenticated() && (
              <Button
                className="btn-margin"
                onClick={this.goTo.bind(this, "profile")}
              >
                Profile
              </Button>
            )}
            {isAuthenticated() && (
              <Button className="btn-margin" onClick={this.logout.bind(this)}>
                Log Out
              </Button>
            )}
            <Button
              className="btn-margin"
              onClick={this.goTo.bind(this, "topics")}
            >
              Topics
            </Button>
            <Button
              className="btn-margin"
              onClick={this.goTo.bind(this, "about")}
            >
              About us
            </Button>
          </Navbar.Header>
        </Navbar>
        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

export default App
