import React from "react"
import Card from "../Card"

const Cards = props => <ul>
  <li>
    <Card value={"A"} visible={true} showed={true} />
  </li>
  <li>
    <Card value={"B"} visible={true} showed={false} />
  </li>
  <li>
    <Card value={"C"} visible={false} showed={false} />
  </li>
  <li>
    <Card />
  </li>
</ul>

export default Cards