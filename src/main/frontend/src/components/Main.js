import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import {About} from "./About";
import {Contact} from "./Contact";
import Slides from "./Slides";
import {NoMatch} from "./NoMatch";
import Footer from "./Footer";
import {Layout} from "./Layout";
import {Jumbotron} from "./Jumbotron";
import {NavigationBar} from "./NavigationBar";

function Main() {
    return(
        <React.StrictMode>
            <React.Fragment>
                <NavigationBar />
                <Jumbotron />
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/main" component={App} />
                            <Route exact path="/main/about" component={About} />
                            <Route path="/main/contact" component={Contact} />
                            <Route path="/main/slides" component={Slides} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </Layout>
                <Footer />
            </React.Fragment>
        </React.StrictMode>
    );
}
export default Main