import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { ProductToCart, Product } from '../pages/Home';




const initialState: { cart: ProductToCart[] } = {
    cart: [],
}


export const cartSlice: any = createSlice({
    name: "products",
    initialState,
    reducers: {
        incrementProductToCart: (state, { payload }) => {
            const productIndex = state.cart.findIndex(
                (product) => product.id === payload
            );

            if (productIndex === -1) {
                return;
            }

            const copyCart = state.cart.slice();
            copyCart[productIndex].quantity += 1;
            state.cart = copyCart;
        },
        decrementProductToCart: (state, { payload }) => {
            const productIndex = state.cart.findIndex(
                (product) => product.id === payload
            );

            if (productIndex === -1) {
                return;
            }

            const copyCart = state.cart.slice();
            const product = copyCart[productIndex];

            if (product.quantity === 0) {
                return;
            }

            product.quantity -= 1;
            copyCart[productIndex] = product;
            state.cart = copyCart;
        },

        getCartValue: (state): any => {
            const isEmptyCart = state.cart.length === 0;
            if (isEmptyCart) {
                return 0;
            }

            return state.cart.reduce((accumulator, payload) => {
                const subTotal = Number(payload.price) * payload.quantity;

                return (accumulator + subTotal);
            }, 0)
        },

        addToCart: (state, { payload }) => {
            const productIndex = state.cart.findIndex(
                (productInCart) => productInCart.id === payload.id
            );

            if (productIndex === -1) {
                state.cart = [...state.cart, { ...payload, quantity: 1 }];
                return;
            }

            const copyCart = state.cart.slice();
            copyCart[productIndex].quantity += 1;
            state.cart = copyCart;
        },
        removeToCart: (state, { payload }) => {
            const productIndex = state.cart.findIndex(
                (productInCart) => productInCart.id === payload.id
            );
                console.log(productIndex)
            state.cart.splice(productIndex, 1)
           
        },

    }
})

export const { addToCart, decrementProductToCart, incrementProductToCart, getCartValue, removeToCart } = cartSlice.actions

export const productToCartt = (state: any) => state.products

export default cartSlice.reducer