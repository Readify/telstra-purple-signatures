import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import './index.css';
import App from './App';
import 'bulma/bulma.sass';
import { Provider } from 'react-redux';
import { basicReduxStore } from './reduxStore';

ReactDOM.render(
  <Provider store={basicReduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
