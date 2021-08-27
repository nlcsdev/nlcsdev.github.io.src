import React from "react";

import StarImg from "../img/port_thumbnail.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import {SpacedCards} from "./WorkPage"

const PortfolioPage = (props) => {

    const spaceCard = SpacedCards();

    return (
        <Container maxWidth="lg">
            <img src={StarImg} style={{ width: "100%" }} />
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="h4" component="h4">Tech Stack:</Typography>
                    <br />
                    <Typography variant="body1" component="p">HTML, JS, CSS, React, React-Redux, React-Transition-Group,, Material UI, Axios, Express.js, Mongoose, MongoDB</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="body1" component="p">This site is built after the nomination site and new techniques are used. The site’s frontend is built with React and includes a MongoDB backend. Unlike the previous site that uses class components and mapped states, function components and hooks are explored here instead.</Typography>
                    <br />
                    <Typography variant="body1" component="p">The CSS framework, Material UI, is incorporated into the styling of the site much more than the previous site. Although both sites are responsive, this site utilizes Material UI’s theme breakpoints and media query hooks rather than CSS media queries. More provided components are used, including for layout purposes.</Typography>
                    <br />
                    <Typography variant="body1" component="p">The site includes a resume builder that allows clients to provide the ideal resume from their perspective and submit it to my MongoDB database. The console log can be used to confirm a successful submission. This allows me to see what aspects I need to improve on.</Typography>
                    <br />
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Button variant="contained" color="primary" href="https://github.com/nlcsdev/nlcsdev.github.io.src" target="_blank">Source</Button>
                    </Grid>
                </CardActions>
            </Card>

        </Container>
    );
}

export default PortfolioPage;