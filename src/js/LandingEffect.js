import React from "react";
import { useLocation } from "react-router";

import { CSSTransition } from "react-transition-group";

import "../css/LandingEffect.css"

const LandingEffect = (props) => {

    let location = useLocation();

    return (
        <CSSTransition key="effectroot" appear={true} in={location.pathname == "/"} timeout={1000} classNames="effect-root">
            <div id="EffectRoot">
                <CSSTransition key="container" appear={true} in={location.pathname == "/"} timeout={1000} classNames="effect-container">
                    <div className="effect-container" id={"EffectContainer" + props.effectlayer}>
                        <CSSTransition key="s1" appear={true} in={location.pathname == "/"} timeout={1000} classNames="square-one">
                            <div id="one" className="square square-one"></div>
                        </CSSTransition>
                        <CSSTransition key="s1c" appear={true} in={location.pathname == "/"} timeout={1000} classNames="square-one-copy">
                            <div id="onecopy" className="square square-one-copy"></div>
                        </CSSTransition>
                        <CSSTransition key="s2" appear={true} in={location.pathname == "/"} timeout={1000} classNames="square-two">
                            <div id="two" className="square square-two"></div>
                        </CSSTransition>
                        <CSSTransition key="s3" appear={true} in={location.pathname == "/"} timeout={1000} classNames="square-three">
                            <div id="three" className="square square-three"></div>
                        </CSSTransition>
                        <CSSTransition key="s4" appear={true} in={location.pathname == "/"} timeout={1000} classNames="square-four">
                            <div id="four" className="square square-four"></div>
                        </CSSTransition>
                    </div >
                </CSSTransition >
            </div >
        </CSSTransition>

    );
}

export default LandingEffect;