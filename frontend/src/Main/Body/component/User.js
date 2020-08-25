import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardAction from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      }
}));

const User = ()=>{
    const classes = useStyles();

    return(
        <Card className ={classes.root}>
            <CardContent>
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
            </CardContent>
            <CardAction>

            </CardAction>
        </Card>
    )
}

export default User;