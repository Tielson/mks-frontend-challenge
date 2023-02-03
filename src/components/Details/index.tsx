
import { Container } from "./styles"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../Redux/store";
import { decrementProductToCart, incrementProductToCart,removeToCart } from "../../Redux/product";

type T = {
    photo: string
    name: string
    price: string
    length: number
    e: any
}



export function Details({ photo, name, price, length, e }: T) {
    const { cart }: any = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();

    return (

        <Container>
            <div className="row product">

                <div className="img"><img src={photo} alt="Acessorio" /> </div>
                <div className="name"> <h3>{name}</h3></div>

                <div className="qnt">
                    <div className="subtract">
                        <button onClick={() => { dispatch(decrementProductToCart(e.id)) }}>-</button>
                    </div>
                    <p>{e.quantity}</p>
                    <div className="add">
                        <button onClick={() => { dispatch(incrementProductToCart(e.id)) }}>+</button>
                    </div>
                </div>
                <div className="price">
                    R${price}
                </div>

                <button className="remove" onClick={() => { dispatch(removeToCart(e.id)) }}>X</button>
            </div>

        </Container>
    )
}