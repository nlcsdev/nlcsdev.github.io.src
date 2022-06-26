import React from "react";

import StarImg from "../img/space_thumbnail.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import space1 from '../img/space/space1.gif';
import space2 from '../img/space/space2.gif';
import space4 from '../img/space/space4.gif';
import space5 from '../img/space/space5.png';

import { SpacedButtons, SpacedCards, SampleImages } from "./WorkPage"

const WorkPage = (props) => {

    const spaceBtn = SpacedButtons();
    const spaceCard = SpacedCards();
    const sampleImg = SampleImages();

    return (
        <Container maxWidth="lg">
            <img src={StarImg} style={{ width: "100%" }} />
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="h4" component="h4">Tech Stack:</Typography>
                    <br />
                    <Typography variant="body1" component="p">React, React-Router, React-Transition-Group, React-Infinite-Scroll-Component, Redux, Redux-Observable, Axios, NASA APOD API, JSONH, Express.js, MUI (Material-UI)</Typography>
                </CardContent>
            </Card>
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="body1" component="p">Spacetagram is developed as part of Shopify’s 2022 frontend challenge for its frontend internship. This site takes in random images returned by the NASA APOD API for the user to like or dislike.</Typography>
                    <br />
                    <Typography variant="body1" component="p">The site is built using React, and have its state managed by Redux. Due to the asynchronous nature of api calls and the frontend’s dependency on api responses, Redux-Observable is used as a middleware for Redux, as Redux does not handle state changes asynchronously by default.</Typography>
                    <br />
                    <Typography variant="body1" component="p">The site caches api responses in the background to the local storage, and the frontend uses that like a database. Although local storage has a limited size by nature, JSONH is used to optimize and reduce the data’s size, allowing approximately 500 more data points to be cached.</Typography>
                    <br />
                    <Typography variant="body1" component="p">React Transition Group is used to handle the animations on the site. The like and dislike animations here are achieved via assigning different exit class names dynamically to play the proper exit animations.</Typography>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={space1} />
                    </Grid>
                    <br />
                    <Typography variant="body1" component="p">All images the user reacted to will be saved locally and viewable in a collection tab. The collection features various sorting orders. Since the user could have viewed over thousands of images, rendering all those images and elements at once would slow down the site dramatically. The React Infinite Scroll Component is used to paginate the data and only render a handful of elements until the user reaches the end of the page by scrolling.</Typography>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={space2} />
                    </Grid>
                    <br />
                    <Typography variant="body1" component="p">MUI or formerly Material UI, is used as the styling framework for this site. Using its theme configuration functionality, the site allows users to pick from 10 themes.</Typography>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={space4} />
                    </Grid>
                    <br />
                    <Typography variant="body1" component="p">The site is designed with responsiveness in mind and features a mobile view that is much more user friendly for smaller screens.</Typography>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={space5} />
                    </Grid>
                    <br />
                </CardContent>

                <CardActions>
                    <Grid container>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://nlcsdev.github.io/spacestagram/" target="_blank">Demo</Button>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://github.com/nlcsdev/shopify-spacestagram-src" target="_blank">Source</Button>
                    </Grid>
                </CardActions>


            </Card>

        </Container>
    );
}

export default WorkPage;