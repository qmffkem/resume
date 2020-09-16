import React from 'react';

import {Typography, List, Paper, makeStyles} from "@material-ui/core";

import Item from './Item';

const useStyles = makeStyles({
    item:{
        padding:'20px'
    },
})

const ExperienceList = (props)=>{
    const classes = useStyles();
    const {items, title} = props;

    return(
        <Paper elevation ={3} className = {classes.item}>
            <Typography variant = "h5">
                {title}
            </Typography>
            <List>
                {items.map((item, key)=>{
                    return(
                        <Item item = {item} key = {key}/>
                    )
                })}
            </List>
        </Paper>
    )
}
export default ExperienceList;