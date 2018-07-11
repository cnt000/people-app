import { connect } from 'react-redux'
import Cards from './cards'
import { showCard, startGame, checkCouple } from './actions'
import {
  PLAYING_STATE,
  FINISHED_GAME_STATE,
  FIRST_OF_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
  CORRECT_COUPLE_STATE,
  INCORRECT_COUPLE_STATE,
} from './constants'

const mapStateToProps = state => {
  return {
    cards: state.memoryGameReducer.cards,
    isPlaying:
      state.memoryGameReducer.gameState === PLAYING_STATE ||
      state.memoryGameReducer.gameState === FIRST_OF_COUPLE_STATE ||
      state.memoryGameReducer.gameState === SECOND_OF_COUPLE_STATE ||
      state.memoryGameReducer.gameState === CORRECT_COUPLE_STATE ||
      state.memoryGameReducer.gameState === INCORRECT_COUPLE_STATE,
    hasWin: state.memoryGameReducer.gameState === FINISHED_GAME_STATE,
    isClickable: state.memoryGameReducer.gameState === PLAYING_STATE ||
      state.memoryGameReducer.gameState === FIRST_OF_COUPLE_STATE,
    gameState: state.memoryGameReducer.gameState,
  }
}

const mapDispatchToProps = dispatch => ({
  showCard: id => dispatch(showCard(id)),
  startGame: () => dispatch(startGame()),
  checkCouple: gameState =>
    gameState === SECOND_OF_COUPLE_STATE ? dispatch(checkCouple()) : '',
})

const MemoryGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default MemoryGame
