import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { StateContext } from '../Auth/AuthProvider';
import { useContext } from 'react';

const Header = () => {

    const userData = useContext(StateContext)
    console.log(userData)

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#" style={{
                        color: 'white'
                    }}>E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>

                            <Nav.Link href="#action1" style={{
                                color: 'white'
                            }}>
                                Home
                            </Nav.Link>

                            <Nav.Link href="#action2" style={{
                                color: 'white'
                            }}>
                                Products
                            </Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"
                                style={{
                                    marginRight: '.5rem'
                                }}
                            >Search</Button>
                            {
                                !userData.authentication ? <>
                                    <NavLink to='/login'>
                                        <Button variant="outline-primary"
                                            style={{
                                                marginRight: '.5rem'
                                            }}
                                        >Login</Button>
                                    </NavLink>
                                    <NavLink to='/signup'>
                                        <Button variant="outline-info"
                                            style={{
                                                marginRight: '.5rem'
                                            }}
                                        >Register</Button>
                                    </NavLink>
                                </> :
                                    <>
                                        <Nav.Link href="#action2" style={{
                                            color: 'white'
                                        }}>
                                            {userData.name}
                                        </Nav.Link>
                                    </>
                            }


                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
