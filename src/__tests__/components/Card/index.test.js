import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../../components/Card';

it('Card renders hidden', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card value={"A"} showed={false} onClick={() => console.log('click')} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Card renders showed', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card value={"A"} showed={true} onClick={() => console.log('click')} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

