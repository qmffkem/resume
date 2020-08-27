import React from 'react';

import Skill from './Skill';

import { Paper,makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        display:"flex",
        padding:40
    }
})
const Skills = ()=>{
    const classes = useStyles();
    
    const skillSets = {
        react: 3,
        Java: 2,
        Javascript:3
    }

    return(
        <Paper elevation={3} className = {classes.root}>
            <Grid container spacing = {10}>
                {Object.entries(skillSets).map(([skill, year], key)=>{
                    return(
                        <Grid item xs key = {key}>
                            <Skill years = {year} skillName = {skill}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
}

export default Skills;