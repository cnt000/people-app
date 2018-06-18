import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Div = styled.div`
  padding: .5em .4em;
  width: 10em;
  height: 14em;
  border: 2px solid black;
  color: black;
  border-radius: 0.25em;
  background: linear-gradient(210deg, 
    rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%);
  margin: .4em .1em;
  font-size: 16px;

  ${props => props.showed && css`
    background: white;
  `}
`

const Card = ({ value, showed, onClick }) => {
  return (
    <Div onClick={onClick} showed={showed}>
      {showed && value}
    </Div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  showed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}

export default Card