import React from "react";
import {NavigationBar} from "./NavigationBar";
import {Jumbotron} from "./Jumbotron";
import {Layout} from "./Layout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import {UsersPage} from "./UsersPage";
import {About} from "./About";
import {Contact} from "./Contact";
import {NoMatch} from "./NoMatch";

export const MainPageRouter = () => {
    return (
        <React.StrictMode>
            <React.Fragment>
                <NavigationBar/>
                <Jumbotron/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/main/trainers" component={App}/>
                            <Route exact path="/main/trainers/:id" component={App}/>
                            <Route exact path="/main/user" component={UsersPage}/>
                            <Route exact path="/main/about" component={About}/>
                            <Route path="/main/contact" component={Contact}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        </React.StrictMode>
    )
}