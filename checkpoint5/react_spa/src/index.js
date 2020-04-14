import React from "react";
import ReactDOM from "react-dom";
import {
    Route,
    Switch,
    BrowserRouter
  } from "react-router-dom";
import Main from "./Main";
import Parents from "./Parents";
import Puppies from "./Puppies";
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles2.css";

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path exact= "/" component={Main}/>
            <Route path="/Parents" component={Parents}/>
            <Route path="/Puppies" component={Puppies}/>
            <Route path="/About" component={About}/>
        </Switch>
    </BrowserRouter>

), document.getElementById("root"));