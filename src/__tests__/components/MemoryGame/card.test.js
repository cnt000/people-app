import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../../components/MemoryGame/card'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

function setup() {
  const props = {
    value: 'A',
    showed: true,
    onClick: jest.fn()
  }

  const enzymeWrapper = mount(<Card {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Card', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Card value={'A'} showed={false} onClick={() => console.log('click')} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render value if showed', () => {
    const wrapper = shallow(
      <Card value={'D'} showed={true} onClick={() => console.log('click')} />
    )
    const value = 'D'
    expect(wrapper.contains(value)).toEqual(true)
  })

  it('should render correctly showed', () => {
    const output = shallow(
      <Card value={'A'} showed={true} onClick={() => console.log('click')} />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('fire an onClick', () => {
    let onClickFunction_spy = jasmine.createSpy('onClickFunction')
    const output = shallow(
      <Card
        value={'A'}
        showed={true}
        onClick={() => onClickFunction_spy('click')}
      />
    )
    output.simulate('click')
    expect(onClickFunction_spy).toHaveBeenCalledWith('click')
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly hided', () => {
    const output = shallow(
      <Card value={'B'} showed={false} onClick={() => console.log('click')} />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render value if showed', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.text()).toContain('A')
  })
  it('should NOT render value if not showed', () => {
    const props = {
      value: 'A',
      showed: false,
      onClick: jest.fn()
    }
  
    const enzymeWrapper = mount(<Card {...props} />)  
    expect(enzymeWrapper.text()).toContain('')
  })

})
