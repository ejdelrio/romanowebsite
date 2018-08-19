import ReactDom from 'react-dom';
import React from 'react';

import App from './components/app';
import './styles/style.scss';
console.log(App);
ReactDom.render(<App />, document.getElementById('root'));