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

const isPlayingState = [
  PLAYING_STATE,
  FIRST_OF_COUPLE_STATE,
  SECOND_OF_COUPLE_STATE,
  CORRECT_COUPLE_STATE,
  INCORRECT_COUPLE_STATE,
]

const isFinished = [FINISHED_GAME_STATE]

const isClickable = [PLAYING_STATE, FIRST_OF_COUPLE_STATE]

const isCoupleSelected = [SECOND_OF_COUPLE_STATE]

const mapStateToProps = state => {
  return {
    cards: state.memoryGameReducer.cards,
    isPlaying: isPlayingState.includes(state.memoryGameReducer.gameState),
    hasWin: isFinished.includes(state.memoryGameReducer.gameState),
    isClickable: isClickable.includes(state.memoryGameReducer.gameState),
    gameState: state.memoryGameReducer.gameState,
  }
}

const mapDispatchToProps = dispatch => ({
  showCard: id => dispatch(showCard(id)),
  startGame: () => dispatch(startGame()),
  checkCouple: gameState =>
    isCoupleSelected.includes(gameState) ? dispatch(checkCouple()) : '',
})

const MemoryGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)

export default MemoryGame
