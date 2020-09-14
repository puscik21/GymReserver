import React, {useState, Component, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Trainer from "./Trainer"
import {Container, Row, Col} from "react-bootstrap"
import {useParams} from "react-router-dom";
import ExtendedTrainer from "./ExtendedTrainer";

export default function TrainersPage() {
    const [trainersProfiles, setTrainersProfiles] = useState(null)
    const [trainerData, setTrainerData] = useState([])
    let {id} = useParams()

    // first loading - trainer data load
    useEffect(() => {
        if (id == null) {
            id = ""
        }
        let path = 'http://localhost:8080/trainer/' + id
        axios.get(path)
            .then(res => {
                setTrainerData(res.data)
            })
    }, [id])

    useEffect(() => {

        let readyProfiles
        if (trainerData.length === 1) { // trainer profile case
            readyProfiles = prepareSingleTrainerProfile()
        } else {
            readyProfiles = prepareProfilesOfTrainers()
        }

        setTrainersProfiles(readyProfiles)
    }, [trainerData]);

    const prepareSingleTrainerProfile = () => {
        const profiles = trainerData.map(trainer => {
            const {id, name, surname, password, createDate, lastLogin} = trainer
            return <ExtendedTrainer key={id} trainerId={id} name={name} surname={surname} password={password} createDate={createDate}
                            lastLogin={lastLogin}/>
        })

        let readyProfiles = []
        readyProfiles.push(profiles[0])
        return readyProfiles
    }

    const prepareProfilesOfTrainers = () => {
        let rowArr = []
        let count = 0
        let readyProfiles

        const profiles = trainerData.map(trainer => {
            const {id, name, surname, password, createDate, lastLogin} = trainer
            return <Trainer key={id} trainerId={id} name={name} surname={surname} password={password}
                            createDate={createDate}
                            lastLogin={lastLogin}/>
        })

        profiles.forEach(() => {
            if (count % 2 === 1) {
                rowArr.push([profiles[count - 1], profiles[count]])
            } else if (count === profiles.length - 1) {
                rowArr.push([profiles[count]])
            }
            count++
        })

        // TODO keys of rows - this can cause a bug if number of trainers > 4
        readyProfiles = rowArr.map(profile => {
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
        return readyProfiles
    }

    return (
        <Container>
            {trainersProfiles}
        </Container>
    )
}