import React from 'react'
import ReactDOM from 'react-dom'
import Cards from '../../../components/MemoryGame/cards'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import defaulState from '../../../defaultState'

describe('Cards', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Cards
        cards={defaulState.cards}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={false}
        isClickable={false}
        hasWin={false}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render before playing', () => {
    const output = shallow(
      <Cards
        cards={defaulState.cards}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={false}
        isClickable={false}
        hasWin={false}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render playing', () => {
    const output = shallow(
      <Cards
        cards={defaulState.cards}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={true}
        isClickable={false}
        hasWin={false}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render after playing (finished)', () => {
    const output = shallow(
      <Cards
        cards={defaulState.cards}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={false}
        isClickable={false}
        hasWin={true}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly empty', () => {
    const output = shallow(
      <Cards
        cards={[]}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={false}
        isClickable={false}
        hasWin={false}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly with snapshot', () => {
    const output = shallow(
      <Cards
        cards={defaulState.cards}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={true}
        isClickable={true}
        hasWin={false}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly with snapshot, isClickable false', () => {
    const output = shallow(
      <Cards
        cards={defaulState.cards}
        showCard={() => console.log('click show card')}
        startGame={() => console.log('click start game')}
        isPlaying={true}
        isClickable={false}
        hasWin={false}
      />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render "YOU WIN" when finished', () => {
    const props = {
      cards: defaulState.cards,
      isPlaying: false,
      isClickable: false,
      hasWin: true,
      showCard: () => console.log('click show card'),
      startGame: () => console.log('click start game'),
    }

    const enzymeWrapper = mount(<Cards {...props} />)
    expect(enzymeWrapper.text()).toContain('HAI VINTO')
  })

  it('should render "PLAY GAME" before start', () => {
    const props = {
      cards: defaulState.cards,
      isPlaying: false,
      isClickable: false,
      hasWin: false,
      showCard: () => jest.fn(),
      startGame: () => jest.fn(),
    }
    const enzymeWrapper = mount(<Cards {...props} />)
    expect(enzymeWrapper.find('p').hasClass('start-button')).toBe(true)

    //const startButton = enzymeWrapper.find('ButtonStart').props()
    //expect(startButton.onClick).toBe(function onClick(){})
  })

  it('should render "CARDS" when isPlaying', () => {
    const props = {
      cards: defaulState.cards,
      isPlaying: true,
      isClickable: false,
      hasWin: false,
      showCard: () => jest.fn(),
      startGame: () => jest.fn(),
    }
    const enzymeWrapper = mount(<Cards {...props} />)
    expect(enzymeWrapper.find('div.card').length).toBe(6)
  })
})
