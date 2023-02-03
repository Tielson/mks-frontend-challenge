import { Container } from './styles'
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { useEffect, useState } from "react"

type T = {
    cartLength: number
}

export function Header({ cartLength }: T) {
    const { cart }: any = useSelector((state: RootState) => state.cart);
    const [quantity, setQuantity] = useState<[]>([])
    function closeTrolley() {
        const t = window.document.querySelector('.trolley')
        t?.classList.toggle('close')
    }




    useEffect(() => {
      const t = cart.reduce((accumulator :any, payload :any) => {
            const subTotal = accumulator + payload.quantity;

            return ( subTotal);
        }, 0)

        setQuantity( t)
    }, [cart])


    return (
        <Container>
            <div className="box">
                <div>
                    <h1>MKS</h1>
                    <p>Sistemas</p>
                </div>
                <button onClick={() => closeTrolley()}>
                    <div>
                        <TiShoppingCart />
                        <span>{quantity}</span>
                    </div>
                </button>
            </div>
        </Container>
    )
}