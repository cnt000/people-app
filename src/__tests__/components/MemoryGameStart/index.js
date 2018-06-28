import React from 'react';
import ReactDOM from 'react-dom';
import MemoryGameStart from '../../../components/MemoryGameStart';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('MemoryGameStart', () => {
  it('should render (without snapshot)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryGameStart onClick={()=>console.log('click')} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render correctly with snapshot', () => {
    const output = shallow(
      <MemoryGameStart onClick={()=>console.log('click')} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});