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
                            <About text="My name is Nelson Liang, and I am a Software Engineer with Undergraduate degrees in Computer Science and Game Design.\n
From 2014-2018, I studied and graduated from Sheridan College with a Bachelor of Game Design. I continued to work at my co-op placement at Sticky Rice Games, lasting between 2017-2020 as a Developer, mainly working with Unity and C# on integrating Google Play and Steam SDK features into our games. In addition, I also worked on some projects to improve the design of our games, add in localization, and perform quality assurance testing.\n
In 2020, I departed Sticky Rice Games to pursue a Bachelor of Science and Major in Computer Science at Toronto Metropolitan University (formerly Ryerson University), lasting between 2020-2025.\n
In 2022, I interned at Penfield AI as a Full Stack Software Engineer, primarily working on Frontend features in React, as well as having some exposure to Kubernetes.\n
From 2022 to the present, I interned and contracted for part-time work at Verto Health as a Junior Site Reliability Engineer. Some of my work includes designing and deploying infrastructure for data ingestion, migrating Kubernetes resources and data between clusters, implementing image scanning software into our CI pipelines, and setting up monitoring dashboards and alerting, etc.
"
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

