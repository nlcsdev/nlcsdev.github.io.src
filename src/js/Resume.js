import React, { useState } from "react";
import resume from "../img/resume.jpg";
import resumePDF from "../resume.pdf";

import { Switch, Route } from 'react-router-dom';
import { LinkTab } from "./Nav";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Builder from "./Builder";

import PageContainer from "./PageContainer";

import { SpacedButtons } from "./WorkPage"

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
            top: "93%",
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

const Resume = () => {

    const theme = useTheme();
    const jumpy = jumpyButton();
    const classes = useStyles();
    const spaceBtn = SpacedButtons();

    const [openTip, setTip] = useState(false);

    let xsDevice = useMediaQuery(theme.breakpoints.down('xs'))
    const restrictImg = xsDevice ? "" : "resumeImg";
    const containerDir = xsDevice ? "column" : "row";
    const jcSetting = xsDevice ? "flex-start" : "center";

    const btnGroup = (
        <Grid className={classes.root} container item justifyContent="center" alignItems="center">
            <Button className={`${spaceBtn.root} ${jumpy.root}`} variant="contained" color="primary" onClick={() => { setTip(true) }} component={ToBuilder}>Not The Right Fit?</Button>
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
        <div>
            <Snackbar className={classes.tip} autoHideDuration={7000} open={openTip} onClose={() => { setTip(false) }} message="Show Me The Right Resume For This Job And Help Me Improve." action={
                <Button aria-label="close-tip" color="secondary" onClick={() => { setTip(false) }}>CLOSE</Button>} />
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + "/Resume"}>
                    <PageContainer src="resume" jc={jcSetting} dir={containerDir} child={content} />
                </Route>

                <Route path={process.env.PUBLIC_URL + "/Resume/Builder"}>
                    <PageContainer src="builder" jc={jcSetting} child={[(<Builder />)]} />
                </Route>
            </Switch>
        </div>
    );
}

export default Resume;