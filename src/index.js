import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './root/rootReducer'

import './css/index.css';

import LandingPage from './js/LandingPage';
import NavBar from './js/Nav';
import Resume from './js/Resume';
import About from './js/About';
import Projects from './js/Projects';
import LandingEffect from './js/LandingEffect';

import { ThemeProvider } from '@material-ui/styles';
import theme from './js/theme';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <LandingEffect effectlayer="1" />
        <LandingEffect effectlayer="2" />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <LandingPage />
          </Route>

          <Route path={process.env.PUBLIC_URL + "/About"}>
            <About text="Hello, I am Nelson Liang. I am a software developer with a background in game design and currently working on a Computer Science Major. My professional experience involves around integrating backend services and localizing for video games via Unity with C#. I also have experience working with web technologies, including HTML, CSS, JS, React, Express, and more.
          \n
          I am looking forward to learning more about software development and making some amazing applications to show the world."
            />
          </Route>

          <Route path={process.env.PUBLIC_URL + "/Projects"}>
            <Projects />
          </Route>

          <Route path={process.env.PUBLIC_URL + "/Resume"}>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);