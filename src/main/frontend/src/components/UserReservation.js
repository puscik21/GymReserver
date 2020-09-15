import React from 'react'
import {Col, Container, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import axios from "axios";


const Styles = styled.div`
  .reservation {
    padding: 1em;
  }

  .textCol {
    text-align: center;
  }
  
  .userButton {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    max-width: 8em;
    min-width: 5em;
  }
`

export const UserReservation = (res, reloadList) => {
    const {id, trainerId, hours, date} = res
    const trainerPath = "/main/trainers/" + trainerId

    const deleteReservation = () => {
        const path = 'http://localhost:8080/reservation/' + id
        axios.delete(path).then(res => {
            if (res.status) {
                reloadList()
                console.log("Reservation deleted")
            }
        }).catch(() => {
            console.log("ERROR: Could not delete reservation!")
        })
    }

    return (
        <Styles key={id}>
            <Container className="reservation">
                <Row className={"justify-content-xs-center"}>
                    <Col sm={3} className="textCol"><h5>{date}</h5></Col>
                    <Col sm={3} className="textCol"><h5>{hours}</h5></Col>
                    <Col sm={3} xs={6}>
                        <Link to={trainerPath} className="link">
                            <Button className="userButton" variant="dark" size="md">Trainer</Button>
                        </Link>
                    </Col>
                    <Col sm={3} xs={6}>
                        <Button onClick={deleteReservation} className="userButton" variant="danger" size="md">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}