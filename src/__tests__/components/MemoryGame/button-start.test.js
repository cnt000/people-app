import React from 'react'
import ReactDOM from 'react-dom'
import ButtonStart from '../../../components/MemoryGame/button-start'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

describe('ButtonStart', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ButtonStart onClick={() => console.log('click')} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render correctly with snapshot', () => {
    const output = shallow(<ButtonStart onClick={() => console.log('click')} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
