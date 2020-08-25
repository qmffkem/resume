import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { Typography } from '@material-ui/core';

import InboxIcon from '@material-ui/icons/Inbox';


const About = ()=>{
    return(
        <Paper elevation ={3}>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <InboxIcon />
                    </ListItemAvatar>
                    <Typography>
                        objective
                    </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <InboxIcon />
                    </ListItemAvatar>
                    <Typography>
                        location
                    </Typography>
                </ListItem>
            </List>
        </Paper>
    )
}

export default About;