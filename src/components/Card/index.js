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

  ${props => props.visible && css`
    background: palevioletred;
  `}
  ${props => props.showed && css`
    background: green;
  `}
`;

const Card = props => <Div>{props.showed && props.value}</Div>

export default Card