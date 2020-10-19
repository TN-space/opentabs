import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const generalOptions = (
    <Fragment>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>

    </Fragment>
)

const Header = () => (
    <Navbar>
        <Navbar.Brand href="/home">
            <h2>Welcome to ...!!</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="nav-links">
                {generalOptions}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header