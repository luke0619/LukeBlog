import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
} from "react-bootstrap";

import { Fragment } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const NavBa = () => {
    return (
        <Fragment>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>立飛部落格</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>首頁</Nav.Link>
                            <Nav.Link href="#link">購物網站</Nav.Link>
                            <NavDropdown title="作品展示" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">CSS網站</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                        <Login />
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default NavBa;
