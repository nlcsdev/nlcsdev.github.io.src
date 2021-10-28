import React from "react";

import StarImg from "../img/stickyricelogo.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import { makeStyles } from '@material-ui/core/styles';

export const SpacedButtons = makeStyles(
    {
        root: {
            margin: "0px 10px 0px 0px"
        }
    }
)

export const SpacedCards = makeStyles(
    {
        root: {
            margin: "10px 0px"
        }
    }
)

export const SampleImages = makeStyles(
    {
        root: {
            maxWidth: "100%"
        }
    }
)


const WorkPage = (props) => {

    const spaceBtn = SpacedButtons();
    const spaceCard = SpacedCards();

    return (
        <Container maxWidth="lg">
            <img src={StarImg} style={{ width: "100%" }} />
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="body1" component="p">I started working at Sticky Rice Games at the start of 2017 for my Co-op at Sheridan College’s Game Design program, then I continued part time until I graduated and worked full time there.</Typography>
                    <br />
                    <Typography variant="body1" component="p">My main responsibility is localizing existing games in Unity and get them ready to be deployed to various stores. I often receive source codes of PC games that require UI & UX adjustments for Android, remapping of controls, and Google Play features integrated. I also worked on reskinning games with new assets to improve their UI and content.</Typography>
                    <br />
                    <Typography variant="body1" component="p">Some other tasks at Sticky Rice Games I am involved in are attending stand ups, QA, setting up store pages, and working with multiplayer services.</Typography>
                    <br />
                    <Typography variant="body1" component="p">* I often work with our partner studio Cherry Kiss Games, who produce mainly adult VNs, so some games are NSFW. *</Typography>
                    <Typography variant="body1" component="p">* NSFW games require a steam account to view. *</Typography>
                    <br />
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://play.google.com/store/apps/dev?id=7831284904287331453&hl=en_CA&gl=US" target="_blank">Android Games</Button>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://store.steampowered.com/developer/stickyricegames" target="_blank">SFW PC Games</Button>
                        <Button className={spaceBtn.root} variant="contained" color="secondary" href="https://store.steampowered.com/publisher/cherrykiss/" target="_blank">NSFW PC Games</Button>
                    </Grid>
                </CardActions>


            </Card>

        </Container>
    );
}

export default WorkPage;