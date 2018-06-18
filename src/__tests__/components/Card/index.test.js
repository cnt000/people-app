import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../../components/Card';
import { shallow } from 'enzyme';

it('Card render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card value={"A"} showed={false} onClick={() => console.log('click')} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Card render showed', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card value={"A"} showed={true} onClick={() => console.log('click')} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// it('Card renders showed', () => {
//   shallow(<Card value={"A"} showed={true} onClick={() => console.log('click')} />);
// });
