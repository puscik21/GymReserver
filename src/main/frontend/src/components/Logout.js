import React from 'react'
import {Redirector} from "./Redirector";

export const Logout = () => {
    localStorage.setItem('user', null)
    return <Redirector />
}