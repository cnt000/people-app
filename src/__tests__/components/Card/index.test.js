import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../../components/Card';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Card', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card value={"A"} showed={false} onClick={() => console.log('click')} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render value if showed', () => {
    const wrapper = shallow(<Card value={'D'} showed={true} onClick={() => console.log('click')} />);
    const value = 'D';
    expect(wrapper.contains(value)).toEqual(true);
  });

  it('should render correctly showed', () => {
    const output = shallow(
      <Card value={"A"} showed={true} onClick={() => console.log('click')} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('fire an onClick', () => {
    const output = shallow(
      <Card value={"A"} showed={true} onClick={() => alert('click')} />
    );
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('click');
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render correctly hided', () => {
    const output = shallow(
      <Card value={"B"} showed={false} onClick={() => console.log('click')} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});