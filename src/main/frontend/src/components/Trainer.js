import React from 'react'
import {Link} from "react-router-dom"
import {Container, Jumbotron, Col, Image, Row} from 'react-bootstrap'
import Header from "./Header";
import styled from 'styled-components'

const Styles = styled.div`
    .link {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
    
    .jumbo {
      &:hover {
        background: #aaa;
      }
    }
`;

function Trainer(props) {
    const {trainerId, name, surname, password, createDate, lastLogin} = props
    const trainerLink = "/main/trainers/" + trainerId

    const getAvatarOption = (name, value) => {
        return "&options[" + name + "][]=" + value
    }

    const avatarLink = "https://avatars.dicebear.com/api/avataaars/" + trainerId + ".svg?options[accessoriesChance]=0&options[top][]=shortHair" +
        getAvatarOption("mouth", "smile")

    return (
        <Styles>
            <Link to={trainerLink} className="link">
                <Jumbotron className="jumbo">
                    <Container>
                        <Row>
                            <Col lg={5} md={12} xs={12}>
                                <Image
                                    src={avatarLink}
                                    height="150px" roundedCircle/>
                            </Col>
                            <Col lg={7} md={12} xs={12}>
                                <Header title={name}/>
                                <Header title={surname}/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Link>
        </Styles>
    )
}

export default Trainer