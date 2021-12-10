import React from 'react';
import ReactDom from 'react-dom';

const reactCreateelement = React.createElement(
  'h1',
  [null],
  [...'Hello, React!']
);
// console.log(reactCreateelement);

const root = document.querySelector('#root');

ReactDom.render((reactCreateelement), root);
