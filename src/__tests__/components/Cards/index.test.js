import React from 'react'
import ReactDOM from 'react-dom'
import Cards from '../../../components/Cards'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import defaulState from '../../../defaultState'

describe('Cards', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Cards cards={defaulState.cards} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  // it('should render a <ul>', () => {
  //   const wrapper = shallow(<Cards cards={[{
  //     value: "DDD",
  //     showed: false
  //   }]} />);
  //   const value = <ul></ul>;
  //   expect(wrapper.contains(value)).toEqual(true);
  // });

  it('should render correctly empty', () => {
    const output = shallow(<Cards cards={[]} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })

  it('should render correctly with snapshot', () => {
    const output = shallow(<Cards cards={defaulState.cards} />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
