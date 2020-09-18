import React, {useState} from 'react';
import {MainPageRouter} from "./MainPageRouter";
import {Redirector} from "./Redirector";
import Footer from "./Footer";

function Main() {
    const [user, setUser] = useState(localStorage.getItem('user'))

    if (user === null || user === "null") {
        return (<Redirector/>)
    } else {
        return (
            <div>
                <MainPageRouter/>
                <Footer/>
            </div>
        );
    }
}

export default Main