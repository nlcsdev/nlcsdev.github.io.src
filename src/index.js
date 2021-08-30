import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './root/rootReducer'

import './css/index.css';

import App from "./js/App.js";
import NavBar from './js/Nav';

import { ThemeProvider } from '@material-ui/styles';
import theme from './js/theme';

const store = createStore(rootReducer);

ReactDOM.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);