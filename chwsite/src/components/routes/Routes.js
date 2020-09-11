import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/acerca-de" component={About}/>
        </Switch>
    );
}

export default Routes;