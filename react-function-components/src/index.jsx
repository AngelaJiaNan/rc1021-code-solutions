import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click me!</button>;
}

const root = document.querySelector('#root');

const element = <CustomButton/>;

ReactDOM.render(element, root);
