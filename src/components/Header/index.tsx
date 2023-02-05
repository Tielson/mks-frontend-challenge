import { TiShoppingCart } from 'react-icons/ti';
import { RootState } from '../../Redux/store';
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import { Container } from './styles'


export function Header() {

    const { cart }: any = useSelector((state: RootState) => state.cart);
    const [quantityProduct, setquantityProduct] = useState<[]>([])

    useEffect(() => {
        const sumProduct = cart.reduce((accumulator: any, payload: any) => {
            const sumProduct = accumulator + payload.quantity;

            return (sumProduct);
        }, 0)

        setquantityProduct(sumProduct)
    }, [cart])

    function closeTrolley() {
        const trolley = window.document.querySelector('.trolley')
        trolley?.classList.toggle('close')
    }



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
                        <span>{quantityProduct}</span>
                    </div>
                </button>
            </div>
        </Container>
    )
}