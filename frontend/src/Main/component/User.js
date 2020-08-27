import React, { useState } from 'react';

import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        flexDirection: "column",
        '& > *': {
          margin: theme.spacing(1),
        },
        alignItems: "center",
        paddingTop:40
      },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      }
}));

const User = ()=>{
    const classes = useStyles();



    return(
        <Paper elevation = {3} className = {classes.root}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <Typography variant="h5" component="h2">
                Name
            </Typography>
            <Typography color="textSecondary">
                Role
            </Typography>
            <Typography variant="body2" component="p">
                icons for phone and related sources...
            </Typography>
        </Paper>
    )
}

export default User;