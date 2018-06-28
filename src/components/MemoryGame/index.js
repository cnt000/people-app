import { connect } from 'react-redux'

import Cards from "../Cards"
import { 
  showCard,
  startGame
} from "./actions"

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.memoryGameReducer.cards,
    isPlaying: state.memoryGameReducer.playing
  }
}

const mapDispatchToProps = dispatch => ({
  showCard: id => dispatch(showCard(id)),
  startGame: () => dispatch(startGame())
})

const MemoryGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default MemoryGame
