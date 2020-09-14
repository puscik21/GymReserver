import React, {useState, useEffect} from 'react'
import {Link, useLocation, useParams} from "react-router-dom"
import {Button, Container, Jumbotron, Alert, Image, Row, Col, Modal, Toast} from 'react-bootstrap'
import Header from "./Header";
import styled from 'styled-components'
import TrainingRegistrationPage from "./TrainingRegistrationPage";

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
    const {trainerId, name, surname, password, createDate, lastLogin} = props
    let location = useLocation()
    const {id} = useParams()
    const trainerLink = "/main/trainers/" + trainerId
    const [showRegisterPopup, setShowRegisterPopup] = useState(false)

    const getAvatarOption = (name, value) => {
        return "&options[" + name + "][]=" + value
    }

    const avatarLink = "https://avatars.dicebear.com/api/avataaars/" + trainerId + ".svg?options[accessoriesChance]=0&options[top][]=shortHair" +
        getAvatarOption("mouth", "smile")

    const showRegistrationMenu = () => {
        setShowRegisterPopup(true)
    }

    return (
        <Styles>
            <Jumbotron>
                <Container>
                    <Row>
                        <Link to="/main/trainers/" className="link">
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
                    <Button onClick={showRegistrationMenu} className="registerButton" variant="dark" size="lg">Register
                        training</Button>
                </Container>
            </Jumbotron>
            <Modal
                size="xl"
                show={showRegisterPopup}
                // show={true}
                onHide={() => setShowRegisterPopup(false)}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xl">
                        Register for training
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TrainingRegistrationPage />
                </Modal.Body>
            </Modal>
        </Styles>
    )
}

export default ExtendedTrainer