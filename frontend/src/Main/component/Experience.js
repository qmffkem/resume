import React from 'react';

import {Typography,List, ListItem, ListItemText, Paper, makeStyles, Divider} from "@material-ui/core";
import Data from '../Data/resume.json';
import { Link,Switch, Route } from 'react-router-dom';
import ExperiencePage from "../Body/Pages/ExperiencePage";

const experienceData = Data.experiences;
const useStyles = makeStyles({
    experiences:{
        padding:'20px'
    },
    listItems:{
        display:"flex",
        flexDirection:"column",
        alignItems:"start"
    },
    summary:{
        paddingLeft:"10px"
    }
})

const Experience = ()=>{
    const classes = useStyles();
    return(
        <Paper elevation ={3} className = {classes.experiences}>
            <Typography variant = "h5">
                Experiences
            </Typography>
            <List>
                {experienceData.map((experience, key)=>{
                    var date = "";
                    if(experience.course !== ""){
                        date = date.concat(experience.course + " / ");
                    };
                    date = date.concat(experience.startDate +
                    " - " +
                    experience.endDate);
                    const summary = experience.summary;
                    return(
                        <div key = {key}>
                            <Divider/>
                            <ListItem className = {classes.listItems}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" component={Link} to={process.env.PUBLIC_URL + "/pages/" + experience.title}>
                                            {experience.title}
                                        </Typography>
                                    }
                                    secondary={date}
                                />
                                <ListItemText className ={classes.summary}>
                                    {summary.map((point,key) =>{
                                        return(
                                            <Typography key = {key}>
                                                {point.point}
                                            </Typography>
                                        )
                                    })}
                                </ListItemText>
                            </ListItem>
                        </div>
                    )
                })}
            </List>
        </Paper>
    )
}

export default Experience;