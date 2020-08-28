import React from 'react';

import Skill from './Skill';

import { Paper,makeStyles,Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        display:"flex",
        padding:40
    }
})
const Skills = (props)=>{
    const classes = useStyles();
    
    const skills = props.skillInfo;
    console.log(skills);
    skills.map((each)=>{
        console.log(each)
    })
    const skillSets = {
        react: 3,
        Java: 2,
        Javascript:3
    }

    return(
        <Paper elevation={3} className = {classes.root}>
            <Grid container spacing = {10}>
                {skills.map( (skill,key)=>{
                    return(
                        <Grid item xs key = {key}>
                            <Skill years = {skill.year} skillName = {skill.name}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Paper>
    )
}

export default Skills;