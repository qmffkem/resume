import React from "react";

import Paper from '@material-ui/core/Paper';
import { TextField, Button } from "@material-ui/core";

const Form = (props)=>{
    
    if(props.types === "login"){
        return(
            <Paper>
                <TextField id="standard-basic" label = "username"/>
                <TextField id="standard-basic" label = "password"/>
                <Button>login</Button>
            </Paper>
        )
    }
    else if(props.types === "createAccount"){
        return(
            <Paper>
                <TextField id="standard-basic" label = "First Name"/>
                <TextField id="standard-basic" label = "Last Name"/>
                <TextField id="standard-basic" label = "username"/>
                <TextField id="standard-basic" label = "password"/>

                <Button>Create Account</Button>
            </Paper>
        )
    }
    else{
        return(
            <p>Other types</p>
        )
    }
}

export default Form;