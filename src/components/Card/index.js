import React from 'react'
import styled, {css} from 'styled-components';

const Div = styled.div`
  padding: 0.25em 1em;
  width: 10em;
  height: 16em;
  border: 2px solid black;
  color: black;
  border-radius: 0.25em;
  background-color: lightgray;
  margin: 0.2em;
  font-size: 16px;

  ${props => props.showed && css`
    background: green;
  `}
`;

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = { showed: this.props.showed }
  }

  show() {
    this.setState({ showed: true })
  }

  render() {
    return <Div 
      showed={this.state.showed}
      onClick={() => this.show()}>
        {this.state.showed && this.props.value}
      </Div>
  }
}

export default Card