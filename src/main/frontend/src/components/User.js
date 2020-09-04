import React, {useState, useEffect} from 'react'
import {Link, useLocation, useParams} from "react-router-dom"
import {Form, InputGroup, FormControl, Button, Container, Jumbotron, Alert} from 'react-bootstrap'
import Header from "./Header";
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
`;

function User(props) {
    const {userId, name, surname, password, createDate, lastLogin} = props
    let location = useLocation()
    const {id} = useParams()
    const userLink = "/main/" + userId

    return (
        <Styles>
            <Link to={userLink} className="jumbo">
                <Jumbotron>
                    <Container>
                        <Header title={name}/>
                        <p>{surname}</p>
                        <p>{createDate}</p>
                    </Container>
                </Jumbotron>
            </Link>
        </Styles>
    )
}

export default User