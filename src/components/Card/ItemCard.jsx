
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const ItemCard = ({ id, image, title, price, description, }) => {


    let data = {
        id: id,
        image: image,
        title: title,
        price: price,
        description: description
    }

    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top"
                src={image}
                style={
                    {
                        height: '19rem',
                        objectFit: 'fill'
                    }
                } />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    price: ${price}
                </Card.Text>
                <NavLink
                    to='/view'
                    state={{ data }}
                >
                    <Button variant="primary">View Details</Button>
                </NavLink>


            </Card.Body>
        </Card>
    )
}

export default ItemCard
