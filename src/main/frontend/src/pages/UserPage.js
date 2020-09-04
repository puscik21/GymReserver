import React, {useState, Component, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import User from "../components/User"
import {Alert, Container, Row, Col} from "react-bootstrap"

export default function UserPage() {
    const [usersProfiles, setUsersProfiles] = useState(null)
    const [userData, setUserData] = useState([])

    // first loading - user data load
    useEffect(() => {
        let path = 'http://localhost:8080/trainer/'
        axios.get(path)
            .then(res => {
                setUserData(res.data)
            })
    }, [])

    useEffect(() => {
        const profiles = userData.map(user => {
            const {id, name, surname, password, createDate, lastLogin} = user
            return <User key={id} userId={id} name={name} surname={surname} password={password} createDate={createDate}
                         lastLogin={lastLogin}/>
        })

        let rowArr = []
        let count = 0
        profiles.forEach(() => {
            if (count % 2 === 1) {
                rowArr.push([profiles[count - 1], profiles[count]])
            } else if (count === 2) {
                rowArr.push([profiles[count]])
            }
            count++
        })

        // TODO keys of rows - this can cause a bug if number of trainers > 4
        let readyProfiles = rowArr.map(profile => {
            if (profile.length === 2) {
                return (
                    <Row key={1}>
                        <Col>{profile[0]}</Col>
                        <Col>{profile[1]}</Col>
                    </Row>
                )
            } else {
                return (
                    <Row key={2}>
                        <Col>{profile[0]}</Col>
                    </Row>
                )
            }
        })

        setUsersProfiles(readyProfiles)
    }, [userData]);

    return (
        <Container>
            {usersProfiles}
        </Container>
        // {/*<Alert variant='warning'>This is a alert — check it out!</Alert>*/}
    )
}