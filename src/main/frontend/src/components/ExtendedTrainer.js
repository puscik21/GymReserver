import React, {useState, useEffect} from 'react'
import {Link, useLocation, useParams} from "react-router-dom"
import {Form, InputGroup, FormControl, Button, Container, Jumbotron, Alert, Image, Row, Col} from 'react-bootstrap'
import Header from "./Header";
import styled from 'styled-components'

const Styles = styled.div`
  .about {
    margin-top: 4em;
    margin-bottom: 3em;
  }
  
  .registerButton {
    width: 15em;
    height: 5em;
    font-weight: 500;
  }
  
  .backButton {
    float: left;
    font-weight: 500;
  }
`;

function ExtendedTrainer(props) {
    const {userId, name, surname, password, createDate, lastLogin} = props
    let location = useLocation()
    const {id} = useParams()
    const userLink = "/main/" + userId
    const avatarLink = "https://avatars.dicebear.com/api/avataaars/" + userId + ".svg?options[accessoriesChance]=0&options[top][]=shortHair"

    return (
        <Styles>
            <Jumbotron>
                <Container>
                    <Row>
                        <Link to="/main/" className="link">
                            <Button className="backButton" variant="secondary" size="md">Back</Button>
                        </Link>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <Image
                                src={avatarLink}
                                height="200px" roundedCircle/>
                        </Col>
                        <Col>
                            <Container>
                                <Header title={name}/>
                                <p>{surname}</p>
                                <p>{createDate}</p>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="about">
                        <Col xs={12} md={12}>
                            <h2>About Trainer</h2><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nunc porta,
                                iaculis risus in, rutrum nulla. Nam dignissim semper lectus dictum dignissim.
                                Praesent tempus ligula sit amet sem hendrerit porttitor. Morbi vel erat ac sapien
                                tincidunt cursus. Praesent consequat id tellus non vestibulum. Morbi ante libero,
                                interdum a fringilla quis, egestas a lorem. Ut suscipit libero ante, quis vulputate
                                ex consequat a. Fusce purus orci, imperdiet sit amet laoreet in, tincidunt id felis.
                                Vivamus mauris tortor, finibus sed lacus semper, ornare condimentum tellus. Vivamus
                                magna dolor, mollis ut mi ac, laoreet venenatis lorem. Aenean tempus lorem ultricies
                                nulla accumsan, et vestibulum lectus condimentum.</p>
                        </Col>
                    </Row>
                    <Button className="registerButton" variant="dark" size="lg">Register training</Button>
                </Container>
            </Jumbotron>
        </Styles>
    )
}

export default ExtendedTrainer