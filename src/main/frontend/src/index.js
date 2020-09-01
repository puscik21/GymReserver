import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cover from "./components/Cover";
import Main from "./components/Main";
import {NoMatch} from "./components/NoMatch";

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={Cover} />
                    <Route path="/main" component={Main} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
