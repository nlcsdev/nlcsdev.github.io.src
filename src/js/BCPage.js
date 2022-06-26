import React from "react";

import StarImg from "../img/bc_thumbnail.jpg";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import bc1 from '../img/bc/bc1.JPG';
import bc2 from '../img/bc/bc2.JPG';
import bc3 from '../img/bc/bc3.JPG';
import bc4 from '../img/bc/bc4.JPG';

import { SpacedButtons, SpacedCards, SampleImages } from "./WorkPage"

const BCPage = (props) => {

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
                    <Typography variant="body1" component="p">HTML, JS, CSS, Svelte, Express.js, WebRTC, ws</Typography>
                </CardContent>
            </Card>
            <Card className={spaceCard.root}>
                <CardContent>
                    <Typography variant="body1" component="p">Basement Chatter is peer-to-peer web chat application, serving as a prototype for the future development of other peer-to-peer web applications.</Typography>
                    <br />
                    <Typography variant="body1" component="p">Basement Chatter uses a node.js server with websockets as a signaling server, allowing clients to perform an initial connection to the signaling server to register their presence and be ready to offer and receive network information required to form a peer connection. All clients that login from the frontend will be registered on the signaling server and their presence will be notified to all other users.</Typography>
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={bc1} />
                    </Grid>
                </CardContent>

                <CardContent>
                    <Typography variant="body1" component="p">Selecting any user connected to the signaling server will initiate a peer-to-peer WebRTC connection, where the initiating peer creates an offer containing session information on their end and sending it through the signaling server to a receiving peer. The receiving peer will then answer the offer and through the signaling server, respond with an answer containing session information on their end. Both peers will use the appropriate session information they have to set their own local and remote connection descriptions.</Typography>
                    <br />
                    <Typography variant="body1" component="p">* In this prototype, peers cannot refuse an offer, therefore it is assumed an answer will be received and a data channel is created when the offer is sent. In the case where an offer can be refused, the data channel will be created after an answer is received. *</Typography>
                    <br />
                    <Typography variant="body1" component="p">Peers can send text messages via the data channel in their peer connection. Once a message is received, the message is stored client side in the svelte store and the message history is displayed.</Typography>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={bc2} />
                    </Grid>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={bc3} />
                    </Grid>
                    <br />
                    <Typography variant="body1" component="p">Basement Chatter allows multiple one on one chats happening simultaneously by establishing multiple peer-to-peer connections with each peer. The clients store all their connections via the svelte store as the connections get created.</Typography>
                    <br />
                    <Grid container alignContent="center" direction="column">
                        <img className={sampleImg.root} src={bc4} />
                    </Grid>
                    <br />
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Button className={spaceBtn.root} variant="contained" color="primary" href="https://github.com/nlcsdev/basement-chatter-front-src" target="_blank">Source</Button>
                    </Grid>
                </CardActions>
            </Card>

        </Container>
    );
}

export default BCPage;