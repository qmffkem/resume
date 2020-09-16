import React from 'react';

import {Typography, ListItem, ListItemText, makeStyles, Divider} from "@material-ui/core";
import { Link} from 'react-router-dom';

const useStyles = makeStyles({
    listItems:{
        display:"flex",
        flexDirection:"column",
        alignItems:"start"
    },
    summary:{
        paddingLeft:"10px"
    }
})

const Experience = (props)=>{
    const classes = useStyles();
    
    var {title, course, startDate,endDate, summary} = props.item;

    var date = "";
    if(course !== ""){
        date = date.concat(course + " / ");
    };
    date = date.concat(startDate +
    " - " +
    endDate);

    return(
        <div>
            <Divider/>
            <ListItem className = {classes.listItems}>
                <ListItemText
                    primary={
                        <Typography variant="h6" component={Link} to={process.env.PUBLIC_URL + `/pages/${title}`}>
                            {title}
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
}

export default Experience;