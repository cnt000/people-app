import React from "react"
import styled, {css} from 'styled-components';

const Card = styled.div`
  padding: 0.25em 1em;
  width: 10em;
  height: 16em;
  border: 2px solid palevioletred;
  color: palevioletred;
  background-color: lightgray;
  margin: 4em;

  ${props => props.showed && css`
    background: palevioletred;
  `}
  ${props => props.visible && css`
    background: green;
  `}
`;

export default Card