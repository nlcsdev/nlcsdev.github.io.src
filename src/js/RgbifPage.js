import React from "react";

import StarImg from "../img/rgbif_thumbnail.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import rgbif1 from '../img/rgbif/rgbif1.gif';
import rgbif2 from '../img/rgbif/rgbif2.gif';
import rgbif3 from '../img/rgbif/rgbif3.png';
import rgbif4 from '../img/rgbif/rgbif4.gif';

import { SpacedButtons, SpacedCards, SampleImages} from "./WorkPage"

const RgbifPage = (props) => {

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
                    <Typography variant="body1" component="p">Python, Pgmagick (python wrapper of GraphicsMagick), tkinter</Typography>
                </CardContent>
            </Card>
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="body1" component="p">Rgbif is a program that takes an image or gif, and apply an animated RGB filter on it, such as the following: </Typography>
                    <br />
                </CardContent>
                <Grid container alignContent="center" direction="column">
                    <Grid key="gif_to_gif" container justifyContent="space-evenly" item>
                        <img className={sampleImg.root} src={rgbif1} />
                        <img className={sampleImg.root} src={rgbif2} />
                    </Grid>
                    <br />
                    <Grid key="static_to_gif" container justifyContent="space-evenly" item>
                        <img className={sampleImg.root} src={rgbif3} />
                        <img className={sampleImg.root} src={rgbif4} />
                    </Grid>
                </Grid>
                <CardContent>
                    <Typography variant="body1" component="p">Rgbif accepts both a local file path or url to a file hosted online as an input. The file can be a static image or a gif. Rgbif uses the Pgmagick package, a wrapper for GraphicsMagick, to apply filters frame by frame and return all the frames back together as a gif. A total of six composite operators (color, hue, overlay, difference, dissolve, and multiply) are provided, as some files may produce more desirable results with alternative operations. </Typography>
                    <br />
                    <Typography variant="body1" component="p">There were concerns that some gifs may induce an epilepsy episode, so the optional parameters minimum frames and intensity were added. This allows the user to lower the intensity of the RGB filter and extend the frames of a gif so that colors don’t change as rapidly. These option also give users more power to customize their gif.</Typography>
                    <br />
                    <Typography variant="body1" component="p">An emoji option that scales the resulting gif to a  48 x 48 dimension is added to provide a more accurate preview of animated emotes on discord while also reducing file sizes when uploading them.</Typography>
                    <br />
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://github.com/nlcsdev/rgbif.py/releases" target="_blank">Demo</Button>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://github.com/nlcsdev/rgbif.py" target="_blank">Source</Button>
                    </Grid>
                </CardActions>
            </Card>

        </Container>
    );
}

export default RgbifPage;