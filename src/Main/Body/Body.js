import React from 'react';
import{Route, Switch} from 'react-router-dom';

import Home from './Page/Home';
import Experience from './Page/Experience';

import Login from './Page/LoginPages/LoginPage';
import Logout from './Page/LoginPages/LogoutPage';
// import Activity from './Page/Activity';

const Body = () =>{
    return(
        <Switch>
            <Route path="/login" component = {Login}/>
            <Route path="/logout" component = {Logout}/>

            <Route path="/experience" component={Experience}/>
            <Route path="/activity" component={Home}/>
            <Route path="/" component={Home} />

        </Switch>

    )
}

export default Body;