import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import PageContainer from './PageContainer';
import Social from './Social';

const LandingPage = () => {

    const content = [(
        <Card elevation={24}>
            <CardContent>
                <Typography align="center" variant="h1" component="h1">Nelson Liang</Typography>
                <Typography align="center" variant="h2" component="h2">Software Developer</Typography>
            </CardContent>
            <CardActions>
                <Social />
            </CardActions>
        </Card>
    )];

    return (
        <PageContainer src="landing" jc="center" ai="center" child={content} />
    );

}

export default LandingPage;