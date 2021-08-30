import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(
    (theme) => ({
        root: {
            minHeight: "100vh",
            [theme.breakpoints.up('sm')]: {
                paddingTop: "72px"
            },
            [theme.breakpoints.only('xs')]: {
                paddingBottom: "72px"
            }
            //padding: "40px"
            // [theme.breakpoints.up('sm')]: {
            //     marginTop: "72px"
            // }
        },
        projectCard: {
            width: "90%",
            padding: "20px",
            [theme.breakpoints.up('md')]: {
                width: "35vw"
            },
            [theme.breakpoints.up('xl')]: {
                width: "20vw",
                height: "70vh"
            }
        }
    })
)

const PageContainer = (props) => {

    const classes = useStyle();

    const childrenComp = props.child.map((x, i) => {
        const childKey = props.src + "_" + i;
        return (
            <Grid key={childKey} className={classes[x.props.customClass]} item>{x}</Grid>
        )
    }
    );

    return (
        <Grid className="relative" container justifyContent="center" >
            <Grid key={props.src} className={classes.root} item container xs={12} sm={10} spacing={0} direction={props.dir ? props.dir : 'column'} justifyContent={props.jc ? props.jc : "center"} alignItems={props.ai ? props.ai : "center"}>
                {childrenComp}
            </Grid>
        </Grid>
    );

}

export default PageContainer;