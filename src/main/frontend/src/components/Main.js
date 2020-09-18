import React, {useState} from 'react';
import {MainPageRouter} from "./MainPageRouter";
import {Redirector} from "./Redirector";

function Main() {
    const [user, setUser] = useState(localStorage.getItem('user'))

    if (user === null || user === "null") {
        return (<Redirector/>)
    } else {
        return (
            <MainPageRouter/>
        );
    }
}

export default Main