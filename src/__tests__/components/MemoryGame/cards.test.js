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
/*​
describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
​
      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)
​
      expect(enzymeWrapper.find('h1').text()).toBe('todos')
​
      const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      expect(todoInputProps.newTodo).toBe(true)
      expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })
​
    it('should call addTodo if length of text is greater than 0', () => {
      const { enzymeWrapper, props } = setup()
      const input = enzymeWrapper.find('TodoTextInput')
      input.props().onSave('')
      expect(props.addTodo.mock.calls.length).toBe(0)
      input.props().onSave('Use Redux')
      expect(props.addTodo.mock.calls.length).toBe(1)
    })
  })
})
*/