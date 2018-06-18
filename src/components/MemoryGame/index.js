import { connect } from 'react-redux'

import Cards from "../Cards"
import { 
  showCard
} from "./actions"

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.memoryGameReducer.cards
  }
}

const mapDispatchToProps = dispatch => ({
  showCard: id => dispatch(showCard(id))
})

const MemoryGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default MemoryGame
