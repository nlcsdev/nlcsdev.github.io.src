import React from "react";

import StarImg from "../img/scary_thumbnail.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import scary1 from '../img/scary/scary1.gif';

import { SpacedButtons, SpacedCards, SampleImages } from "./WorkPage"

const ScaryPage = (props) => {

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
                    <Typography variant="body1" component="p">Python, Virtualvideo, V4l2loopback, Ffmpeg-python (python wrapper for ffmpeg), OpenCV</Typography>
                </CardContent>
            </Card>
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="body1" component="p">Scary Cam is project forked from <a href="https://github.com/Flashs/virtualvideo" target="_blank" rel="noreferrer">Virtualvideo</a>. The original author utilizes the v4l2loopback kernel module to create a virtual v4l2 device, then using OpenCV and ffmpeg to create images that can be fed to the v4l2 device. This allows any OS that uses v4l2 to show virtual webcam feeds.</Typography>
                    <br />
                    <Typography variant="body1" component="p">Building on top of the source, I created Scary Cam. This simple program uses two videos with an equal number of frames to create a scary filter like the following:</Typography>
                </CardContent>
                <Grid container alignContent="center" direction="column">
                    <img className={sampleImg.root} src={scary1} />
                </Grid>
                <CardContent>
                    <Typography variant="body1" component="p">Scary Cam follows a similar structure to its source. OpenCV is used to read a frame from one of the two videos, saving the frame as an image, then passing that image to ffmpeg to be formatted for a v4l2 device.</Typography>
                    <br />
                    <Typography variant="body1" component="p">The original source prepares a process with a proper ffmpeg output, however, Scary Cam prepares a second process with altered resolutions for ffmpeg output. This causes the static like effect as the input and output have mismatched resolutions and ffmpeg will alter the input accordingly for the output. At random, ffmpeg may use either a regular or altered process to feed an image to the virtual v4l2 device.</Typography>
                    <br />
                    <Typography variant="body1" component="p">The current code base uses a singular image that gets saved and overwritten constantly to be presented to the virtual cam. Alternatively, each frame can be saved and stored, avoiding the need to constantly save them once they are all stored. However, this takes up significant storage space. Code for the alternative method is currently commented out.</Typography>
                    <br />
                    <Typography variant="body1" component="p">Some minor additional features include some shell code that starts up and clean up virtual devices, as well as packing the entire program inside a single shell script.</Typography>
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://github.com/nlcsdev/scarycam" target="_blank">Source</Button>
                    </Grid>
                </CardActions>
            </Card>

        </Container>
    );
}

export default ScaryPage;