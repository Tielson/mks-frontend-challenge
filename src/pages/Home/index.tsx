
import { Header } from "../../components/Header/index.js"
import { Products } from "../../components/Products/index.js"

import { IoMdClose } from 'react-icons/io';
import { Container } from "./styles"

import { useEffect, useState } from "react"
import { Details } from "../../components/Details/index.js";
import { useDispatch, useSelector } from "react-redux";
import { getCartValue, addToCart, decrementProductToCart, incrementProductToCart } from "../../Redux/product.js";
import { RootState } from "../../Redux/store.js";
import { getPriceBRL } from '../../utils'

export type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
};

export type ProductToCart = Product & {
    quantity: number;
};




export function Home() {

    const { cart }: any = useSelector((state: RootState) => state.cart);

    const [products, setProducts] = useState<Product[]>([])
    const [detais, setDetails] = useState<Product[]>([])
    const [price, setprice] = useState<Product[]>([])

    useEffect(() => {
        setDetails(cart)

        const pricee = () => {

            const isEmptyCart = cart.length === 0;
            if (isEmptyCart) {
                return 0;
            }

            return cart.reduce((accumulator: any, cart: any) => {
                const subTotal = Number(cart.price) * cart.quantity;

                return (accumulator + subTotal);
            }, 0)
        }
        setprice(pricee)


    }, [cart])

    function closeTrolley() {
        const t = window.document.querySelector('.trolley')
        t?.classList.toggle('close')

    }

    useEffect(() => {
        fetch("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, [])

    return (
        <Container>

            <Header
                cartLength={0} />

            <div className="group row">
                {
                    products.map((e) => (
                        <Products
                            e={e}
                            name={e.name}
                            description={e.description}
                            photo={e.photo}
                            price={e.price}
                        />
                    ))

                }
            </div>

            <div className="trolley close row">
                <div className="textExit">
                    <div className="row text">
                        <h2>Carrinho de compras</h2>
                    </div>
                    <div className="exit ">
                        <button onClick={() => closeTrolley()}><IoMdClose /></button>
                    </div>
                </div>
                <div className="row itens">
                    <div className="iten" >
                        {detais.map((e: any) => (
                            <Details
                                key={String(e.id)}
                                name={e.name}
                                photo={e.photo}
                                price={e.price}
                                length={e.length}
                                e={e}
                            />
                        ))}
                    </div>
                </div>
                <div className="row prince">
                    <h2>Total:</h2>
                    <h2 className="R">{`R$${price}`}</h2>
                </div>
                <div className="button">
                    <button >Finalizar Compra</button>
                </div>
            </div>

            <footer><h5>MKS sistemas © Todos os direitos reservados</h5></footer>
        </Container>
    )
}