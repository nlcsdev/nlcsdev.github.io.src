import React from "react";
import ProjectComp from "./ProjectComponent";
import rgbif_thumbnail from "../img/rgbif_thumbnail.jpg";
import nom_thumbnail from "../img/nom_thumbnail.jpg";
import port_thumbnail from "../img/port_thumbnail.jpg";
import stickyrice_thumbnail from "../img/stickyricelogo.jpg";

import WorkPage from "./WorkPage";
import NomPage from "./NomPage";
import PortfolioPage from "./PortfolioPage";
import RgbifPage from "./RgbifPage";

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageContainer from "./PageContainer";


import { Switch, Route } from 'react-router-dom';
import { LinkTab } from "./Nav";

const workTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Work");

const rgbTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Rgbif");

const nomTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Nomination");

const portfolioTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Portfolio");

const workDesc = "Sticky Rice Games is a publishing company that offers localization and platform integration. I worked three and a half years here as a game developer, focusing on localizing, porting, and integrating games for Google Play Games, and Steam, etc.\\n* Some of the titles may be NSFW. *";

const rgbDesc = "I developed rgbif when I noticed people were using gifs with animated rgb or rainbow filters to show how hype they are about something. However, the limited choices of rgb gifs made them a bit repetitive. So I developed this program to convert any gif or image into an rgb gif.";

const nomDesc = "This site started out as a learning project, using requirements listed from a front-end job position. I later expanded the scope of the project to include a backend and additional styling.";

const portfolioDesc = "This site is built on React and stylized with Material UI. It also features an interactive resume builder that submits the data to a MongoDB database.";

const Projects = (props) => {

    const theme = useTheme();
    const isStretch = useMediaQuery(theme.breakpoints.up('xl')) ? "center" : "stretch";

    const content = [
        (<ProjectComp customClass="projectCard" rootComp={workTab} thumbnail={stickyrice_thumbnail} title="Sticky Rice Games" desc={workDesc} />),
        (<ProjectComp customClass="projectCard" rootComp={rgbTab} thumbnail={rgbif_thumbnail} title="Rgbif" desc={rgbDesc} live="https://github.com/nlcsdev/rgbif.py/releases" src="https://github.com/nlcsdev/rgbif.py" />),
        (<ProjectComp customClass="projectCard" rootComp={nomTab} thumbnail={nom_thumbnail} title="Nomination Site" desc={nomDesc} live="https://nlcsdev.github.io/nomination-site/" src="https://github.com/nlcsdev/nomination-site" />),
        (<ProjectComp customClass="projectCard" rootComp={portfolioTab} thumbnail={port_thumbnail} title="Portfolio Site" desc={portfolioDesc} src="https://github.com/nlcsdev/nlcsdev.github.io.src" />)
    ]

    return (
        <div>

            <Route exact path="/Projects">
                <PageContainer src="projects" dir="row" child={content} ai={isStretch} />
            </Route>

            <Route path="/Projects/Work">
                <PageContainer src="work" dir="row" child={[(<WorkPage />)]} />
            </Route>

            <Route path="/Projects/Rgbif">
                <PageContainer src="rgbif" dir="row" child={[(<RgbifPage />)]} />
            </Route>

            <Route path="/Projects/Nomination">
                <PageContainer src="nomination" dir="row" child={[(<NomPage />)]} />
            </Route>

            <Route path="/Projects/Portfolio">
                <PageContainer src="portfolio" dir="row" child={[(<PortfolioPage />)]} />
            </Route>

        </div>

    );
}

export default Projects;