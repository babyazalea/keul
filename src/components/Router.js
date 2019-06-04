import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Header from "./Header";
import Intro from "../routes/Intro";
import Selection from "../routes/Selection";
import Reviews from "../routes/Reviews";
import Thanks from "../routes/Thanks";

export default ()=> (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Intro} />
                <Route path="/selection" exact component={Selection} />
                <Route path="/reviews" exact component={Reviews} />
                <Route path="/thanks" exact component={Thanks} />
            </Switch>
        </>
    </Router>
);