import React, { useState, useEffect } from 'react'
import Header from "./Header";
// import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

function User(props) {
    const { name, surname, password, createDate, lastLogin } = props

    return (
        <div>
            <div>
                <Header title={name}/>
                <p>{surname}</p>
                <p>{createDate}</p>
            </div>
        </div>
    )
}
export default User