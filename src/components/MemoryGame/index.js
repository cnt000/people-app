import { connect } from 'react-redux'

import Cards from "../Cards"
import { 
  showCard,
  startGame,
  checkCouple,
} from "./actions"

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.memoryGameReducer.cards,
    isPlaying: state.memoryGameReducer.playing,
    gameStateId: state.memoryGameReducer.gameStateId
  }
}

const mapDispatchToProps = dispatch => ({
  showCard: id => dispatch(showCard(id)),
  startGame: () => dispatch(startGame()),
  checkCouple: (gameStateId) => (gameStateId === 2) ? dispatch(checkCouple()) : '',
})

const MemoryGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default MemoryGame
