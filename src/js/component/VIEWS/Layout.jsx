import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//In react-router-dom v6, "Switch" is replaced by routes "Routes".

import Home from "./Home.jsx";
import About from "./About.jsx";
import Users from "./Users.jsx";

const Layout = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/users">
                    <Users/>
                </Route>
            </Switch>
        </Router>
    )
};

export default Layout;