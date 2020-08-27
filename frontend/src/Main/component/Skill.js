import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        alignItems: "center"
    }
})

const Skill = (props)=>{
    const years = props.years;
    const skillName = props.skillName;

    const classes = useStyles();

    // const years = 3;
    return(
        <div className = {classes.root}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={years}
                duration={years}
                easingFunction={easeQuadInOut}
                > 
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                        value={value}
                        maxValue = {5}
                        text={`${roundedValue}yrs`}
                        /* This is important to include, because if you're fully managing the
                        animation yourself, you'll want to disable the CSS animation. */
                        styles={buildStyles({ 
                            pathTransition: "none",
                            strokeLinecap: "butt" 
                        })}
                        />
                        );
                    }}
            </AnimatedProgressProvider>
            <Typography variant="h5">
                {skillName}
            </Typography>
        </div>
    )
};

export default Skill;