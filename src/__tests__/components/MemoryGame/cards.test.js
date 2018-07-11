import React from 'react'
import ReactDOM from 'react-dom'
import Cards from '../../../components/MemoryGame/cards'
import ButtonStart from '../../../components/MemoryGame/button-start'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import defaulState from '../../../defaultState'

describe('Cards', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Cards cards={defaulState.cards} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render before playing', () => {
    const output = shallow(
      <Cards cards={defaulState.cards} isPlaying={false} />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render playing', () => {
    const output = shallow(<Cards cards={defaulState.cards} isPlaying={true} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render after playing (finished)', () => {
    const output = shallow(<Cards cards={defaulState.cards} hasWin={true} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render "YOU WIN" when finished', () => {
    const output = mount(<Cards cards={defaulState.cards} hasWin={true} />)
    expect(output.text()).toContain('HAI VINTO')
  })

  it('should render correctly empty', () => {
    const output = shallow(<Cards cards={[]} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly with snapshot', () => {
    const output = shallow(<Cards cards={defaulState.cards} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
