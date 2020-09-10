import React from 'react'
import {Container} from 'react-bootstrap'
import backgroundImage from "../assets/backgroundImage.jpg";

function Footer() {

    const footerStyle = {
        // position: 'relative',
        // bottom: '0',
        position: 'absolute',
        left: 0,
        right: 0,
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        paddingBottom: '0'
    }

    return (
        <Container>
            <footer className='footer mt-auto bg-dark text-white' style={footerStyle}>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#!"> Grzes.com</a>
                    <h5 className="mb-1">No piekna ta strona jest</h5>
                </div>
            </footer>
        </Container>
    )
}

export default Footer