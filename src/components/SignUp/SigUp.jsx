import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../Login/login.css'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SigUp = () => {

    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const obj = {
                name: name,
                email: email,
                password: password
            }
            localStorage.setItem('user-data', JSON.stringify(obj))
            navigate('/login', { replace: true })
        }
        setValidated(true);

    };
    return (
        <div className='login'>
            <div className="box">
                <h2>SignUp</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Row} md="4" controlId="validationCustom01">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Row} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Row} md="4" controlId="validationCustom01">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Button variant='success' type="submit">SignUp</Button>
                    <NavLink to='/login'>
                        <Button
                            style={{
                                marginLeft: '1rem'
                            }}
                            variant='warning'
                            type="button">Login</Button>
                    </NavLink>

                </Form>
            </div>
        </div>
    )
}

export default SigUp
