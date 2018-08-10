import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import MemoryGame from '../../../components/MemoryGame'
import Cards from '../../../components/MemoryGame/cards'
import Card from '../../../components/MemoryGame/card'
import { timerGame } from '../../../modules/Helpers'
import store from '../../../store'

describe('MemoryGame', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <MemoryGame />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render', () => {
    const output = shallow(
      <Provider store={store}>
        <MemoryGame />
      </Provider>
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('Before game start: isPlaying false', () => {
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryGame />
      </Provider>
    )
    expect(enzymeWrapper.find(Cards).prop('isPlaying')).toEqual(false)
  })

  it('Game started: click on start-button, isPlaying true', () => {
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryGame />
      </Provider>
    )

    enzymeWrapper.find('.start-button').simulate('click')
    expect(enzymeWrapper.find(Cards).prop('isPlaying')).toEqual(true)
  })

  it('Game started: first Card is showed', () => {
    const enzymeWrapper = mount(
      <Provider store={store}>
        <MemoryGame />
      </Provider>
    )

    expect(
      enzymeWrapper
        .find(Card)
        .first()
        .prop('showed')
    ).toEqual(true)
  })

  // it('wait', () => {
  //   const enzymeWrapper = mount(<Provider store={store}>
  //     <MemoryGame />
  //   </Provider>,)

  // jest.useFakeTimers(); // this must be called before any async things happen

  // setTimeout(() => {
  //   // Note the placement of this try/catch is important.
  //   // You'd think it could be placed most anywhere, but nope...
  //   try {
  //     // If this assertion fails, an err is thrown.
  //     // If we do not catch()...done.fail(e) it,
  //     // then this test will take jasmine.DEFAULT_TIMEOUT_INTERVAL (5s unless you override)
  //     // and then fail with an unhelpful message.
  //     expect(enzymeWrapper.find(Card).first().prop('showed').toEqual(false))
  //   } catch(e) {
  //   }
  // }, 11000);
  // jest.runTimersToTime(11000);
  //   //expect(enzymeWrapper.find(Card).first().prop('showed')).toEqual(false)
  // })
})
