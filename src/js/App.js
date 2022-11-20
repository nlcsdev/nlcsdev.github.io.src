import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SETTIP } from "../root/actions";

import LandingPage from './LandingPage';

import Resume from './Resume';
import About from './About';
import Projects from './Projects';
import LandingEffect from './LandingEffect';

import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';
import Button from "@material-ui/core/Button";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../css/transitions.css";

import { Switch, Route, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => (
    {
        tip: {
            position: "fixed",
            top: "75%",
            [theme.breakpoints.down('xs')]: {
                top: "65%"
            }

        }
    })
);

const App = () => {

    let location = useLocation();
    let showTip = useSelector(state => state.tipState);
    const classes = useStyles();

    const dispatch = useDispatch();

    const setTip = (b) => { dispatch({ type: SETTIP, value: b }) };

    const onEnter = () => {
        window.scrollTo({ left: 0, top:window.pageYOffset, behavior: 'instant' });
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    const onEntering = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });   
    }

    const onEntered = () => {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }

    return (
        <div>
            <LandingEffect effectlayer="1" />
            <LandingEffect effectlayer="2" />
            <Snackbar className={classes.tip} autoHideDuration={7000} open={showTip} onClose={() => { setTip(false) }} message="Show Me The Right Resume For This Job And Help Me Improve." action={
                <Button aria-label="close-tip" color="secondary" onClick={() => { setTip(false) }}>CLOSE</Button>} />
            <TransitionGroup appear={true}>
                <CSSTransition key={location.key} classNames="slide" timeout={1000} onEnter={onEnter} onEntering={onEntering} onEntered={onEntered}>
                    <Switch location={location}>
                        <Route exact path={process.env.PUBLIC_URL + "/"}>
                            <LandingPage />
                        </Route>

                        <Route path={process.env.PUBLIC_URL + "/About"}>
                            <About text="Hello, I am Nelson Liang. I am a software engineer with a background in game design and currently completing my Bachelor’s Computer Science Degree. I have experience working in full stack development and dev ops. My technical experience includes but not limited to HTML, CSS, JS, React, Svelte, Python, Ruby, Azure, Kafka, Elasticsearch, Opensearch, Docker, Kubernetes, and WebRTC, etc.
          \n
          I am looking forward to learning more about different software development aspects and contributing to some amazing projects to change the world."
                            />
                        </Route>

                        <Route path={process.env.PUBLIC_URL + "/Projects"}>
                            <Projects />
                        </Route>

                        <Route path={process.env.PUBLIC_URL + "/Resume"}>
                            <Resume />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;

