import { connect } from 'react-redux'

import Cards from '../Cards'
import { showCard, startGame, checkCouple } from './actions'

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.memoryGameReducer.cards,
    isPlaying: [0, 1, 2, 3, 4].includes(state.memoryGameReducer.gameStateId),
    gameStateId: state.memoryGameReducer.gameStateId,
  }
}

const mapDispatchToProps = dispatch => ({
  showCard: id => dispatch(showCard(id)),
  startGame: () => dispatch(startGame()),
  checkCouple: gameStateId =>
    gameStateId === 2 ? dispatch(checkCouple()) : '',
})

const MemoryGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default MemoryGame
