import { useLocation, useNavigate } from 'react-router-dom'
import './view.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DispatchContext, StateContext } from '../Auth/AuthProvider';
import { useContext } from 'react';


const View = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const userData = useContext(StateContext)

    const dispath = useContext(DispatchContext)

    const { data } = location.state

    const addToCartHandler = () => {
        dispath({
            type: 'cart_data',
            cart: data,
        })
        navigate('../', { replace: true })
    }

    return (
        <div className="view">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={data.image}
                    style={
                        {
                            height: '25rem',
                            objectFit: 'fill'
                        }
                    }
                />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        price: ${data.price}
                    </Card.Text>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <Button
                        onClick={
                            () => !userData.authentication ?
                                navigate('/login', { replace: true })
                                :
                                addToCartHandler()
                        }
                        variant="warning"
                        style={
                            {
                                marginLeft: '1rem'
                            }
                        }>Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default View
