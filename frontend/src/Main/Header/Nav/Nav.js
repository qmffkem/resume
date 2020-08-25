import React,{useState} from "react";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

const NavBar = ()=>{
  const [value, setValue] = useState(0);

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  return(
      <div className = {classes.root}>
        <Tabs value = {value} onChange = {(event,newValue)=>{setValue(newValue)}}>
          <Tab value = {0} label = "HOME" component = {Link} to ="/"/>
          <Tab value = {1} label = "EXPERIENCE" component = {Link} to ="/experience"/>
          <Tab value = {2} label = "ACTIVITY" component = {Link} to ="/activity"/>
        </Tabs>
      </div>
  )
}

export default NavBar;
