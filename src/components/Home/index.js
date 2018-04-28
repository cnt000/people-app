import React from "react"
import { Link } from "react-router-dom"

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  </div>
)

export default Home
