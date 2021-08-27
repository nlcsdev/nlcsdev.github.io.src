import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { UPDATELANGUAGE, UPDATEOTHER, REMOVELANGUAGE, REMOVEOTHER, UPDATEEDU, UPDATEWORK, UPDATEPROFILE } from "../root/actions.js";


import resume_template from "../img/resume_template.jpg";

import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { green, red } from '@material-ui/core/colors';

import clsx from "clsx";

const axios = require('axios');

const defaultResume = {
    profile: "",
    work: "",
    education: "",
    langauges: [],
    others: []
}

export const resumeState = (state = defaultResume, action) => {

    let currentResume = { ...state };
    switch (action.type) {

        case UPDATEPROFILE:
            if (action.payload != null) {
                currentResume.profile = action.payload;
            }
            return currentResume;

        case UPDATEWORK:
            if (action.payload != null) {
                currentResume.work = action.payload;
            }
            return currentResume;

        case UPDATEEDU:
            if (action.payload != null) {
                currentResume.education = action.payload;
            }
            return currentResume;

        case UPDATELANGUAGE:
            if (action.payload != null) {
                currentResume.langauges.push(action.payload);
            }
            return currentResume;

        case UPDATEOTHER:
            if (action.payload != null) {
                currentResume.others.push(action.payload);
            }
            return currentResume;

        case REMOVELANGUAGE:
            if (action.payload != null) {
                currentResume.langauges.splice(action.payload, 1);
            }
            return currentResume;

        case REMOVEOTHER:
            if (action.payload != null) {
                currentResume.others.splice(action.payload, 1);
            }
            return currentResume;

        default:
            return state;
    }
}

const useStyles = makeStyles({
    root: {
        position: "absolute",
        "& .MuiOutlinedInput-multiline": {
            height: "100%",
            padding: "7px 14px",
        },
        "& textarea": {
            height: "100% !important",
            fontSize: "1vh"
        }
    },
    imgSize: {
        width: "100%",
        height: "90vh"
    },
    imgContained: {
        objectFit: "contain"
    },
    inheritSize: {
        width: "100%",
        height: "100%"
    },
    form: {
        position: "absolute",
        top: "0%"
    },
    profile: {
        height: "8%",
        top: "17.5%",
        left: "6%",
        width: "88%"
    },
    work: {
        height: "18%",
        top: "30%",
        left: "6%",
        width: "88%"
    },
    education: {
        height: "15%",
        top: "52%",
        left: "6%",
        width: "88%"
    },
    language: {
        width: "42%",
        top: "70%",
        left: "5%",

    },
    other: {
        width: "42%",
        top: "70%",
        left: "51%",
    },
    bubble: {
        width: "40%",
        margin: "5px",
        "& .MuiOutlinedInput-root": {
            height: "32px",
            borderRadius: "200px"
        },
        "& .MuiOutlinedInput-input": {
            padding: "0px 14px"
        }
    },
    submitButton: {
        position: "absolute",
        top: "93%",
        left: "50%",
        transform: "translateX(-50%)"
    },
    submitSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        }
    },
    submitError: {
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        }
    },
    submitProgress: {
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-12px"
    },
    chipRoot: {
        margin: "5px"
    }
});

const Builder = (props) => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(undefined);
    const timer = useRef();

    const theme = useTheme();
    const classes = useStyles();
    const submitStatusStyling = clsx({
        [classes.submitSuccess]: success==true, [classes.submitError]: success==false
    });

    const dispatch = useDispatch();
    const resumeState = useSelector((state) => state.resumeState);

    const restrictImg = useMediaQuery(theme.breakpoints.down('xs')) ? "" : "resumeImg";

    const onEnter = (event) => {
        if (event.keyCode == 13) {
            const target = event.target;
            if (target.id == "language-field") {
                newLanguage(event.target.value);
                event.target.value = "";
            }
            else if (target.id == "other-field") {
                newOther(event.target.value);
                event.target.value = "";
            }
        }
    }

    const onChange = (event) => {
        if (event.target.id == "profile-field") {
            newProfile(event.target.value);
        } else if (event.target.id == "work-field") {
            newWork(event.target.value);
        } else if (event.target.id == "education-field") {
            newEdu(event.target.value);
        }
    }

    const submitBtnTxt = () => {
        if (success == undefined) {
            return "Submit";
        } else if (success) {
            return "Success";
        } else {
            return "Error";
        }
    }

    const onSubmit = (event) => {
        if (!success) {
            setLoading(true);
            timer.current = window.setTimeout(SubmitData, 2500);
        }

    }

    const SubmitData = () => {
        axios.post("https://nlcsdev-proxy.herokuapp.com/newresume", {
            profile: resumeState.profile,
            work: resumeState.work,
            education: resumeState.education,
            languages: resumeState.langauges,
            others: resumeState.others
        }).then(
            (res) => {
                setLoading(false);
                setSuccess(true);
                clearTimeout(timer.current);
                console.log(res.data);
            }
        ).catch((err) => {
            setLoading(false);
            setSuccess(false);
            clearTimeout(timer.current);
            console.log(err)
        });
    }

    const newProfile = (payload) => { dispatch({ type: UPDATEPROFILE, payload: payload }) };
    const newWork = (payload) => { dispatch({ type: UPDATEWORK, payload: payload }) };
    const newEdu = (payload) => { dispatch({ type: UPDATEEDU, payload: payload }) };

    const newLanguage = (payload) => { dispatch({ type: UPDATELANGUAGE, payload: payload }) };
    const newOther = (payload) => { dispatch({ type: UPDATEOTHER, payload: payload }) };

    const removeLanguage = (payload) => { dispatch({ type: REMOVELANGUAGE, payload: payload }) };
    const removeOther = (payload) => { dispatch({ type: REMOVEOTHER, payload: payload }) };

    const languageBubbles = resumeState.langauges.map((x, i) => {
        return (<Chip className={classes.chipRoot} key={"language_" + x + "_" + i} label={x} onDelete={() => { removeLanguage(i) }} />)
    })

    const otherBubbles = resumeState.others.map((x, i) => {
        return (<Chip className={classes.chipRoot} key={"other_" + x + "_" + i} label={x} onDelete={() => { removeOther(i) }} />)
    })

    return (
        <div className={"relative"}>
            <img className={restrictImg} src={resume_template} />
            <form className={`${classes.inheritSize} ${classes.form}`}>
                <TextField className={`${classes.root} ${classes.profile}`} minRows={3} maxRows={3} id="profile-field" variant="outlined" multiline onChange={onChange} value={resumeState.profile} />
                <TextField className={`${classes.root} ${classes.work}`} minRows={6} maxRows={6} id="work-field" variant="outlined" multiline onChange={onChange} value={resumeState.work} />
                <TextField className={`${classes.root} ${classes.education}`} minRows={6} maxRows={6} id="education-field" variant="outlined" multiline onChange={onChange} value={resumeState.education} />

                <div className={`${classes.root} ${classes.language}`}>
                    <TextField className={`${classes.bubble}`} minRows={1} maxRows={1} id="language-field" variant="outlined" onKeyDown={onEnter} />
                    {languageBubbles}
                </div>

                <div className={`${classes.root} ${classes.other}`}>
                    <TextField className={`${classes.bubble}`} minRows={1} maxRows={1} id="other-field" variant="outlined" onKeyDown={onEnter} />
                    {otherBubbles}
                </div>
            </form>
            <Button className={clsx(classes.submitButton, submitStatusStyling)} disabled={loading} variant="contained" color="primary" onClick={onSubmit}>{submitBtnTxt()}{loading && <CircularProgress className={classes.submitProgress} size={24} />}</Button>

        </div>
    )

}

export default Builder;