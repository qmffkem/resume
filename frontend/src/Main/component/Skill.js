import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { Typography } from '@material-ui/core';

const Skill = ()=>{
    const years = 3;
    return(
        <>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={years}
                duration={2}
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
                        styles={buildStyles({ pathTransition: "none" })}
                        />
                        );
                    }}
            </AnimatedProgressProvider>
            <Typography>
                Skill name
            </Typography>
        </>
    )
};

export default Skill;