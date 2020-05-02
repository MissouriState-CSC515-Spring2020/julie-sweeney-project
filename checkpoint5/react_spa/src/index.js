import React, { Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import {
    Route,
    Switch,
    BrowserRouter
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles2.css";
import * as serviceWorker from './serviceWorker';

const Main = lazy(() =>
import('./Main'));

const Parents = lazy(() =>
import('./Parents'));

const Puppies = lazy(() =>
import('./Puppies'));

const About = lazy(() =>
import('./About'));

ReactDOM.render((
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path exact= "/" component={Main}/>
                <Route path="/Parents" component={Parents}/>
                <Route path="/Puppies" component={Puppies}/>
                <Route path="/About" component={About}/>
            </Switch>
        </Suspense>
    </Router>
), document.getElementById("root"));

serviceWorker.register();