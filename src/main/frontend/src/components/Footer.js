import React from 'react'
import {Container} from 'react-bootstrap'

function Footer() {

    const footerStyle = {
        bottom: '0',
        left: 0,
        position: 'absolute',
        width: '100%'
    }

    return (
        <Container>
            <footer className='footer mt-auto bg-dark text-white' style={footerStyle}>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#!"> Grzes.com</a>
                    <h5 className="mb-1">Beautiful page it is!</h5>
                </div>
            </footer>
        </Container>
    )
}

export default Footer