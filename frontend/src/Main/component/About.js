import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { Typography } from '@material-ui/core';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import DoneIcon from '@material-ui/icons/Done';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

const About = (props)=>{
    const userInfo = props.userInfo;

    return(
        <Paper elevation ={3}>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <DoneIcon />
                    </ListItemAvatar>
                    <Typography>
                        {userInfo.objective}
                    </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <MyLocationIcon />
                    </ListItemAvatar>
                    <Typography>
                        {userInfo.permanentAddress}
                    </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <SmartphoneIcon />
                    </ListItemAvatar>
                    <Typography>
                        {userInfo.phone}
                    </Typography>
                </ListItem>
            </List>
        </Paper>
    )
}

export default About;