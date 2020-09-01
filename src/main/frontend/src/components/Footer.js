import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <Container>
            <footer className='footer mt-auto py-lg-1 fixed-bottom bg-dark text-white'>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#!"> Grzes.com</a>
                    <h5 className="mb-1">No piekna ta strona jest</h5>
                </div>
            </footer>
        </Container>
    )
}
export default Footer