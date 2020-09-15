import React, {useState, Component, useEffect} from 'react';
import Header from "./Header";
import axios from 'axios';
import {Container, Row, Col, Jumbotron, Button, Image} from "react-bootstrap";
import styled from "styled-components";
import {UserReservation} from "./UserReservation";

const Styles = styled.div`
  .about {
    margin-top: 4em;
    margin-bottom: 3em;
  }
  
  .avatar {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }
`;

export const UsersPage = () => {
    const [profileData, setProfileData] = useState([])
    const [userInfo, setUserInfo] = useState(null)
    const [reservationsData, setReservationsData] = useState([])
    const [userReservationList, setUserReservationList] = useState([])

    const getAvatarOption = (name, value) => {
        return "&options[" + name + "][]=" + value
    }

    const avatarLink = "https://avatars.dicebear.com/api/avataaars/" + profileData.id + ".svg?options[accessoriesChance]=0&options[top][]=shortHair" +
        getAvatarOption("mouth", "smile")

    const prepareUserInfo = () => {
        return (
            <div>
                <Row className={"justify-content-lg-center"}>
                    <Col lg="6">
                        <Image className="avatar"
                               src={avatarLink}
                               height="200px" roundedCircle
                        />
                    </Col>
                </Row>
                <Row className={"justify-content-lg-center"}>
                    <Col>
                        <Container>
                            <Header title={profileData.name + " " + profileData.surname}/>
                        </Container>
                    </Col>
                </Row>
                <Row className="about">
                    <Col md={6} sm={12}>
                        <h2>About me</h2><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nunc porta,
                            iaculis risus in, rutrum nulla. Nam dignissim semper lectus dictum dignissim.
                            Praesent tempus ligula sit amet sem hendrerit porttitor. Morbi vel erat ac sapien
                            tincidunt cursus. Praesent consequat id tellus non vestibulum. Morbi ante libero,
                            interdum a fringilla quis, egestas a lorem. Ut suscipit libero ante, quis vulputate
                            ex consequat a.</p>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h2>Contact details</h2><br/>
                        <Row>
                            <Col sm={3}><h6>Age</h6></Col>
                            <Col sm={9}>23</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col sm={3}><h6>Sex</h6></Col>
                            <Col sm={9}>Male</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col sm={3}><h6>E-mail</h6></Col>
                            <Col sm={9}>example@gmail.com</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col sm={3}><h6>Phone</h6></Col>
                            <Col sm={9}>123 456 789</Col>
                        </Row>
                        <hr/>
                    </Col>
                </Row>
                <hr/>
            </div>
        )
    }

    useEffect(() => {
        getData();
        getReservationsData();
    }, [])

    useEffect(() => {
        setUserInfo(prepareUserInfo())
    }, [profileData])


    const getData = () => {
        let path = 'http://localhost:8080/user/1'
        axios.get(path)
            .then(res => {
                setProfileData(res.data)
            })
    }

    const getReservationsData = () => {
        let userId = 1
        let path = 'http://localhost:8080/reservation/user/week/' + userId
        axios.get(path)
            .then(res => {
                setReservationsData(res.data)
            })
    }

    useEffect(() => {
        const readyReservationList = reservationsData.map(res => {
            return UserReservation(res, getReservationsData)
        })
        setUserReservationList(readyReservationList)
    }, [reservationsData])

    return (
        <Styles>
            <Jumbotron>
                <Container>
                    {userInfo}
                    <Row className={"justify-content-sm-center"}>
                        <h1>Reservation list</h1>
                    </Row>
                    {userReservationList}
                </Container>
            </Jumbotron>
        </Styles>
    )
}
