import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Div = styled.div`
  padding: 0.5em 0.4em;
  width: 10em;
  height: 14em;
  border: 2px solid black;
  color: black;
  border-radius: 0.25em;
  background: linear-gradient(
    210deg,
    rgba(26, 188, 156, 1) 0%,
    rgba(142, 68, 173, 1) 100%
  );
  margin: 0.4em 0.1em;
  font-size: 16px;

  ${props =>
    props.showed &&
    css`
      background: white;
    `};
`

const Card = ({ value, showed, onClick }) => {
  return (
    <Div onClick={onClick} showed={showed}>
      {showed && value}
    </Div>
  )
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
  showed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
