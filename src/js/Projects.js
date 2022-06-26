import React from "react";
import ProjectComp from "./ProjectComponent";
import rgbif_thumbnail from "../img/rgbif_thumbnail.jpg";
import nom_thumbnail from "../img/nom_thumbnail.jpg";
import scary_thumbnail from "../img/scary_thumbnail.jpg";
import bc_thumbnail from "../img/bc_thumbnail.jpg";
import port_thumbnail from "../img/port_thumbnail.jpg";
import space_thumbnail from "../img/space_thumbnail.jpg";
import stickyrice_thumbnail from "../img/stickyricelogo.jpg";

import WorkPage from "./WorkPage";
import NomPage from "./NomPage";
import SpacePage from "./SpacePage";
import PortfolioPage from "./PortfolioPage";
import RgbifPage from "./RgbifPage";
import ScaryPage from "./ScaryPage";
import BCPage from "./BCPage";

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageContainer from "./PageContainer";


import { Switch, Route } from 'react-router-dom';
import { LinkTab } from "./Nav";

const workTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Work");

const bcTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Basement-Chatter");

const rgbTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Rgbif");

const spaceTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Spacetagram");

const nomTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Nomination");

const scaryTab = LinkTab(process.env.PUBLIC_URL + "/Projects/ScaryCam");

const portfolioTab = LinkTab(process.env.PUBLIC_URL + "/Projects/Portfolio");

const workDesc = "Sticky Rice Games is a publishing company that offers localization and platform integration. I worked three and a half years here as a game developer, focusing on localizing, porting, and integrating games for Google Play Games, and Steam, etc.\\n* Some of the titles may be NSFW. *";

const bcDesc = "Basement Chatter is a P2P chat app and gives me a hands on experience on P2P technology development. This project introduces me to the workings of P2P technology and serves as a prototype for a larger scale P2P app.";

const rgbDesc = "I developed rgbif when I noticed people were using gifs with animated rgb or rainbow filters to show how hype they are about something. However, the limited choices of rgb gifs made them a bit repetitive. So I developed this program to convert any gif or image into an rgb gif.";

const spaceDesc = "This site is part of the Shopify 2022 frontend challenge, utilizing the NASA APOD API to create a space image rating site.";

const nomDesc = "This site started out as a learning project, using requirements listed from a front-end job position. I later expanded the scope of the project to include a backend and additional styling.";

const scaryDesc = "Inspired by a popular Discord videoplayer bug, I experimented with some video manipulation. The result is a for fun project that creates a scary video for v4l2 virtual devices.\\n* Rapid flashes of images may cause discomfort. *";

const portfolioDesc = "This site is built on React and stylized with Material UI. It also features an interactive resume builder that submits the data to a MongoDB database.";

const Projects = (props) => {

    const theme = useTheme();
    const isStretch = useMediaQuery(theme.breakpoints.up('xl')) ? "center" : "stretch";
    const isCenter = useMediaQuery(theme.breakpoints.down('sm')) ? "center" : "flex-start";

    const content = [
        // (<ProjectComp customClass="projectCard" rootComp={workTab} thumbnail={stickyrice_thumbnail} title="Sticky Rice Games" desc={workDesc} />),
        (<ProjectComp customClass="projectCard" rootComp={bcTab} thumbnail={bc_thumbnail} title="Basement Chatter" desc={bcDesc} live="https://basement-chatter.rcp.r9n.co/" src="https://github.com/nlcsdev/basement-chatter-front-src" />),
        (<ProjectComp customClass="projectCard" rootComp={rgbTab} thumbnail={rgbif_thumbnail} title="Rgbif" desc={rgbDesc} live="https://github.com/nlcsdev/rgbif.py/releases" src="https://github.com/nlcsdev/rgbif.py" />),
        (<ProjectComp customClass="projectCard" rootComp={spaceTab} thumbnail={space_thumbnail} title="Spacetagram" desc={spaceDesc} live="https://nlcsdev.github.io/spacestagram/" src="https://github.com/nlcsdev/shopify-spacestagram-src"  /> ),
        (<ProjectComp customClass="projectCard" rootComp={nomTab} thumbnail={nom_thumbnail} title="Nomination Site" desc={nomDesc} live="https://nlcsdev.github.io/nomination-site/" src="https://github.com/nlcsdev/nomination-site" />),
        (<ProjectComp customClass="projectCard" rootComp={scaryTab} thumbnail={scary_thumbnail} title="Scary Cam" desc={scaryDesc} src="https://github.com/nlcsdev/scarycam" />),
,
        (<ProjectComp customClass="projectCard" rootComp={portfolioTab} thumbnail={port_thumbnail} title="Portfolio Site" desc={portfolioDesc} src="https://github.com/nlcsdev/nlcsdev.github.io.src" />)
    ]

    return (
        <div>

            <Route exact path="/Projects">
                <PageContainer src="projects" dir="row" child={content} ai={isStretch} jc={isCenter} />
            </Route>

            <Route path="/Projects/Basement-Chatter">
                <PageContainer src="bc" dir="row" child={[(<BCPage />)]} />
            </Route>

            {/* <Route path="/Projects/Work">
                <PageContainer src="work" dir="row" child={[(<WorkPage />)]} />
            </Route> */}

            <Route path="/Projects/Rgbif">
                <PageContainer src="rgbif" dir="row" child={[(<RgbifPage />)]} />
            </Route>

            <Route path="/Projects/Spacetagram">
                <PageContainer src="spacetagram" dir="row" child={[(<SpacePage />)]} />
            </Route>

            <Route path="/Projects/Nomination">
                <PageContainer src="nomination" dir="row" child={[(<NomPage />)]} />
            </Route>

            <Route path="/Projects/ScaryCam">
                <PageContainer src="scarycam" dir="row" child={[(<ScaryPage />)]} />
            </Route>   

            <Route path="/Projects/Portfolio">
                <PageContainer src="portfolio" dir="row" child={[(<PortfolioPage />)]} />
            </Route>

        </div>

    );
}

export default Projects;