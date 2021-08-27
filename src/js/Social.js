import React from "react";
import gh_icon from "../img/github_icon.svg";
import email_icon from "../img/email_icon.svg";
import linked_icon from "../img/linked_icon.svg";

import Grid from "@material-ui/core/Grid";

const Footer = () => {
    return(
        <Grid container justifyContent="space-evenly">
            {/* Icons by "icon king1" from freeicon.io*/}
            <a className="icons" href="https://github.com/nlcsdev" target="_blank"><img className="icons" src={gh_icon} /></a>
            <a className="icons" href="mailto:nelson.liang@ryerson.ca" target="_blank"><img className="icons" src={email_icon} /></a>
            <a className="icons" href="https://linkedin.com/in/nlcsdev/" target="_blank"><img className="icons" src={linked_icon} /></a>
        </Grid>
    );
}

export default Footer;