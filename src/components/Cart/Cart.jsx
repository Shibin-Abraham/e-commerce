import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { StateContext } from '../Auth/AuthProvider';

const Cart = () => {

    const [showA, setShowA] = useState(true);

    const userData = useContext(StateContext)

    const toggleShowA = () => setShowA(!showA);

    return (
        <Row>
            <Col className="mb-2">

                <Button onClick={toggleShowA} className="mb-2">
                    Go to cart
                </Button>

                <Toast show={showA} onClose={toggleShowA}>
                    {
                        userData.cart?.map((data, index) => {
                            return (
                                <div key={index}>
                                    <Toast.Header as={Col}>
                                        <img
                                            src={data.image}
                                            className="rounded me-2"
                                            alt=""
                                            style={{ width: '1.5rem', height: '1.5rem' }}
                                        />
                                        <strong className="me-auto">{data.title}</strong>
                                        <small><Toast.Body> ${data.price}</Toast.Body></small>
                                    </Toast.Header>

                                </div>
                            )
                        })
                    }

                </Toast>
            </Col>

        </Row>
    )
}

export default Cart
