import { addToCart } from '../../Redux/product.js';
import { FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Container } from './styles.js'

type T = {
    photo: string
    name: string
    price: string
    description: string
    e: any
}

export function Products({ photo, name, price, description, e }: T) {
    const dispatch = useDispatch();

    return (
        <Container>
            <div className="section products" >
                <button onClick={() => { dispatch(addToCart(e)) }}>
                    <div className="iten row">
                        <div className="description">
                            <div className='img1'>
                                <img src={photo} alt="relogio" />
                            </div>

                            <div className='namePrince'>
                                <h2>{name}</h2>
                                <span>R${price}</span>
                            </div>
                            <p>{description}</p>
                        </div>

                        <div className="button">
                            <FiShoppingBag />
                            <h1>
                                comprar
                            </h1>
                        </div>
                    </div>
                </button>
            </div>
        </Container>
    )
}