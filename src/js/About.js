import React from 'react';

import PageContainer from './PageContainer';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const About = (props) => {

    const strArr = props.text.split("\\n");
    const Text = () => {
        return strArr.map((t,i) => {
            return (<div key={"about text" + i} ><Typography variant="body1" component="p">{t}</Typography><br /></div>)
        });
    }
    const content = [(
        <Card>
            <CardContent>
                <Typography variant="h2" component="h2">About</Typography>
                <br />
                <Text />
            </CardContent>
        </Card>
    )];
    return (
        <PageContainer src="about" jc="center" ai="flex-start" child={content} />
    );
}

export default About;