import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//In react-router-dom v6, "Switch" is replaced by routes "Routes". I'm using v5.3.0.

import Home from "./Home.jsx";
import About from "./About.jsx";
import Users from "./Users.jsx";
import Navbar from "./Navbar.jsx";
import NotFound from "./NotFound.jsx";

const Layout = () => {
    return (
        <Router>
            <Navbar/> {/* <= Permanent component */}
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/users/:userid/:username">
                    <Users/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
};

export default Layout;