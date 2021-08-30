import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Icon from '@material-ui/core/Icon';

export const LinkTab = (dest) => {
    let comp = React.forwardRef((props, ref) => (
        <Link ref={ref} to={dest} {...props} />
    ));
    return comp;
}

const HomeTab = LinkTab(process.env.PUBLIC_URL + "/");

const AboutTab = LinkTab(process.env.PUBLIC_URL + "/About");

const ProjectsTab = LinkTab(process.env.PUBLIC_URL + "/Projects");

const ResumeTab = LinkTab(process.env.PUBLIC_URL + "/Resume");

const useStyle = makeStyles((theme) => ({
    root: {
        zIndex: "3000",
        [theme.breakpoints.up('sm')]: {
            "& .MuiTab-wrapper": {
                flexDirection: 'row'
            }
        },
        [theme.breakpoints.down('xs')]: {
            top: "auto",
            bottom: 0
        }

    }
}));

const NavBar = () => {
    const location = useLocation();
    const compPathName = process.env.PUBLIC_URL + location.pathname;
    const classes = useStyle();
    const theme = useTheme();
    const TabsVar = useMediaQuery(theme.breakpoints.down('xs')) ? "fullWidth" : "standard";

    return (
        <AppBar className={classes.root}>
            <Tabs variant={TabsVar} value={false} >
                <Tab activepath={compPathName} className={classes.root} icon={<Icon>home</Icon>} label="Home" component={HomeTab} />
                <Tab activepath={compPathName} className={classes.root} icon={<Icon>person</Icon>} label="About" component={AboutTab} />
                <Tab activepath={compPathName} className={classes.root} icon={<Icon>construction</Icon>} label="Projects" component={ProjectsTab} />
                <Tab activepath={compPathName} className={classes.root} icon={<Icon>description</Icon>} label="Resume" component={ResumeTab} />
            </Tabs>
        </AppBar>
    );
}

export default NavBar;