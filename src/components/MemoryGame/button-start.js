import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  margin: auto auto;
  text-align: center;
`

const ButtonStart = ({ onClick }) => {
  return (
    <Div>
      <h1>Memory Game</h1>
      <button onClick={onClick} className={'start-button'}>
        Click to start
      </button>
    </Div>
  )
}

ButtonStart.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonStart
