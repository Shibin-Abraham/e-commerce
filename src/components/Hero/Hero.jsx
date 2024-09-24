
import Cart from '../Cart/Cart';
import './hero.css'
import Button from 'react-bootstrap/Button';

const Hero = () => {
    return (
        <div className='hero'>

            <Cart />

            <h2>
                <span>
                    WELCOME TO
                </span>
                FASHION CLUB
            </h2>
            <p>Suspendisse sed tellus id libero pretium interdum. Suspendisse potenti. Quisque consectetur elit sit amet vehicula tristique.</p>
            <Button variant="primary">Get start</Button>
        </div>
    )
}

export default Hero
