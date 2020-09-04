import React from 'react';

import {Typography, List, Paper, makeStyles} from "@material-ui/core";

import Experience from './Experience';

const useStyles = makeStyles({
    experiences:{
        padding:'20px'
    },
})

const ExperienceList = (props)=>{
    const classes = useStyles();
    const experiences = props.experiences;

    return(
        <Paper elevation ={3} className = {classes.experiences}>
            <Typography variant = "h5">
                Experiences
            </Typography>
            <List>
                {experiences.map((experience, key)=>{
                    return(
                        <Experience experience = {experience} key = {key}/>
                    )
                })}
            </List>
        </Paper>
    )
}
export default ExperienceList;