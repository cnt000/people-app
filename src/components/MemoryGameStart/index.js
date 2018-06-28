import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  margin: auto auto;
  text-align: center;
`

const MemoryGameStart = ({ onClick }) => {
  return (
    <Div onClick={onClick}>
      <h1>Memory Game</h1>
      <p>Click to start</p>
    </Div>
  )
}

MemoryGameStart.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default MemoryGameStart