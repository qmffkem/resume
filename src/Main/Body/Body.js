import React from 'react';
import{Route, Switch} from 'react-router-dom';

import Home from './Page/Home';
import Experience from './Page/Experience';
// import Activity from './Page/Activity';

const Body = () =>{
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/experience" component={Experience}/>
            <Route path="/activity" component={Home}/>
        </Switch>

    )
}

export default Body;