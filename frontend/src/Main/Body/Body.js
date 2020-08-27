import React from 'react';
import{Route, Switch} from 'react-router-dom';

import {Container} from "@material-ui/core";

import Home from './Pages/HomePage';
import Experience from './Pages/ExperiencePage';

import Login from './Pages/LoginPages/LoginPage';
import Logout from './Pages/LoginPages/LogoutPage';
import CreateAccount from './Pages/LoginPages/CreateAccountPage';
// import Activity from './Page/Activity';

const Body = () =>{
    return(
        <Container>
            <Switch>
                <Route path="/login" component = {Login}/>
                <Route path="/logout" component = {Logout}/>
                <Route path="/create-account" component = {CreateAccount}/>
                
                {/* <Route path="/experience" component={Experience}/>
                <Route path="/activity" component={Home}/> */}
                <Route path="/" component={Home} />

            </Switch>
        </Container>
    )
}

export default Body;