import React from "react";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { SpacedButtons } from "./WorkPage"

const useStyles = makeStyles((theme) => ({
    actionRoot: {
        justifyContent: "space-between"
    },
    img: {
        objectFit: "cover",
        [theme.breakpoints.up('xl')]: {
            height: "10vw"
        }
    },
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    },
    projectBox: {
        height: "70%"
    }
}));

const ProjectComp = (props) => {

    const classes = useStyles();

    const spaceBtn = SpacedButtons();

    const strArr = props.desc.split("\\n");
    const Text = () => {
        return strArr.map((t, i) => {
            return (<div key={props.title + " key " + i}><Typography variant="body1" component="p">{t}</Typography><br /></div>)
        });
    }

    return (
        <Card className={classes.root} elevation={24}>
            <div>
                <CardMedia
                    component="img"
                    className={classes.img}
                    image={props.thumbnail}
                />
                <CardContent>
                    <Typography variant="h4" component="h4">{props.title}</Typography>
                    <Text />
                </CardContent>
            </div>
            <CardActions className={classes.actionRoot}>
                <div>
                    {
                        props.live ? <Button className={spaceBtn.root} variant="contained" color="primary" href={props.live} target="_blank">Demo</Button> : null
                    }

                    {
                        props.src ? <Button variant="contained" color="primary" href={props.src} target="_blank">Source</Button> : null
                    }
                </div>
                <Button variant="contained" color="primary" component={props.rootComp}>Details</Button>
            </CardActions>

        </Card>
    );
}

export default ProjectComp;