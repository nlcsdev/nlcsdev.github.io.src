import React from "react";

import StarImg from "../img/nom_thumbnail.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import nom1 from '../img/nom/nom1.gif';
import nom2 from '../img/nom/nom2.gif';
import nom3 from '../img/nom/nom3.gif';
import nom4 from '../img/nom/nom4.jpeg';

import { SpacedButtons, SpacedCards, SampleImages } from "./WorkPage"

const NomPage = (props) => {

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
                    <Typography variant="body1" component="p">HTML, JS, CSS, React, React-Redux, React-Transition-Group, React-Boostrap, Axios, OMDB API, Express.js, Amazon API Gateway, AWS S3, AWS Lambda, PIL</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="body1" component="p">This project started out as a learning opportunity, using the constraints and requirements listed by Shopify for its frontend internship, which only required a barebone frontend utilizing the OMDB API. The project was expanded to include a backend, as well as styling.</Typography>
                    <br />
                    <Typography variant="body1" component="p">This site is built with React on its frontend and uses Express.js and AWS Lambda for its backend. The site has the functionality to return and display search results from the OMDB API.</Typography>
                </CardContent>
                <Grid container justifyContent="center">
                    <img className={sampleImg.root} src={nom1} />
                </Grid>
                <CardContent>
                    <Typography variant="body1" component="p">Users can select and deselect their top five entertainments. All their selections are also accessible as recent nominations. The last five nominations are stored in local storage.</Typography>
                </CardContent>

                <Grid container justifyContent="center">
                    <img className={sampleImg.root} src={nom2} />
                </Grid>
                <CardContent>
                    <Typography variant="body1" component="p">Nominated choices appear on an interactive preview where users can remove their nominations. Their top choices can be downloaded as a single image. An AWS Lambda function that does image processing via the PIL package is used and the result is returned to the client. The most recent result image is also stored in local storage, preventing clients from spamming AWS Lambda and return a cached copy of the result instead.</Typography>
                </CardContent>
                <Grid container justifyContent="center">
                    <img className={sampleImg.root} src={nom3} />
                </Grid>
                <CardContent>
                    <Typography variant="body1" component="p">The following is a sample result image:</Typography>
                </CardContent>
                <Grid container justifyContent="center">
                    <img className={sampleImg.root} src={nom4} style={{maxHeight: "50vh"}} />
                </Grid>
                <br />
                <CardActions>
                    <Grid container>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://nlcsdev.github.io/nomination-site/" target="_blank">Demo</Button>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://github.com/nlcsdev/nomination-site" target="_blank">Source</Button>
                    </Grid>
                </CardActions>
            </Card>

        </Container >
    );
}

export default NomPage;