import React from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';



const TimelineBio = ()=>{
    return(
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation = {3}>
                        <Typography variant = "h6" component = "h1">
                            Title
                        </Typography>
                        <Typography>
                            content
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation = {3}>
                        <Typography variant = "h6" component = "h1">
                            Title
                        </Typography>
                        <Typography>
                            content
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    10:00 am
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="primary">
                <FastfoodIcon/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                    Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default TimelineBio;