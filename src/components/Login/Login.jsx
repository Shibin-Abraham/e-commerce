import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { DispatchContext } from '../Auth/AuthProvider';


const Login = () => {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispath = useContext(DispatchContext)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const obj = JSON.parse(localStorage.getItem('user-data'))
            if (obj.email != email || obj.password != password) {
                setError('Invalid username or password')
            } else {
                dispath({
                    type: 'auth_login',
                    name: obj.name,
                    email: obj.email
                })
                navigate('../', { replace: true })
            }

        }

        setValidated(true);
    };

    return (
        <div className='login'>
            <div className="box">
                <h2>Login</h2>
                <p>
                    {
                        validated ? error : null
                    }
                </p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                    <Button variant='success' type="submit">LOGIN</Button>
                    <NavLink to='/signup'>
                        <Button
                            style={{
                                marginLeft: '1rem'
                            }}
                            variant='warning'
                            type="button">Register</Button>
                    </NavLink>

                </Form>
            </div>
        </div>
    )
}

export default Login
