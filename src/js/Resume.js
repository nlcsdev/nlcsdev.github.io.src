import React from "react";
import { useDispatch } from "react-redux";

import resume from "../img/resume.jpg";
import resumePDF from "../resume.pdf";

import { Switch, Route } from 'react-router-dom';
import { LinkTab } from "./Nav";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Builder from "./Builder";

import PageContainer from "./PageContainer";

import { SpacedButtons } from "./WorkPage"

import { SETTIP } from "../root/actions";

export const tipState = (state = false, action) => {
    switch (action.type) {

        case SETTIP:
            if (action.value != state)
                return action.value;
            else
                return state;

        default:
            return state;
    }
}

const jumpyButton = makeStyles(
    {
        root: {
            transformOrigin: "50% 100% 0",
            animation: "$jumpy 0.5s ease 0s infinite alternate"
        },
        "@keyframes jumpy": {
            from: {
                transform: "matrix(1.05, 0, 0, 0.9, 0, 0)"
            },
            to: {
                transform: "matrix(0.95, 0, 0, 1.1, 0, -5 )"
            }
        }

    }
);

const useStyles = makeStyles((theme) => (
    {
        root: {
            position: "absolute",
            top: "96%",
            left: "0%"
        },
        tip: {
            position: "fixed",
            top: "75%",
            [theme.breakpoints.down('xs')]: {
                top: "65%"
            }

        }
    })
);

const ToBuilder = LinkTab("/Resume/Builder");

const downloadPDF = () => {
    const a = document.createElement('a');
    a.href = resumePDF;
    a.download = "Nelson_Liang_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const Resume = (props) => {

    const theme = useTheme();
    const jumpy = jumpyButton();
    const classes = useStyles();
    const spaceBtn = SpacedButtons();

    const dispatch = useDispatch();

    const setTip = (b) => { dispatch({ type: SETTIP, value: b }) };

    let xsDevice = useMediaQuery(theme.breakpoints.down('xs'))
    const restrictImg = xsDevice ? "" : "resumeImg";
    const containerDir = xsDevice ? "column" : "row";
    const jcSetting = xsDevice ? "flex-start" : "center";

    const btnGroup = (
        <Grid className={classes.root} container item justifyContent="center" alignItems="center">
            <Button className={`${spaceBtn.root}`} variant="contained" color="primary" startIcon={<Icon>download</Icon>} onClick={downloadPDF}>Download PDF</Button>
        </Grid>
    );

    const resumeComp = (
        <div className="relative">
            <img className={restrictImg} src={resume} />
            {btnGroup}
        </div>

    );
    const content = [
        resumeComp
    ];

    return (

        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/Resume"}>
                <PageContainer src="resume" jc={jcSetting} dir={containerDir} child={content} />
            </Route>
        </Switch>

    );
}

export default Resume;