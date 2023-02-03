import {configureStore} from '@reduxjs/toolkit'
import productToCart from './product'

export const store = configureStore({
    reducer:{
        cart: productToCart
    }
})

export type RootState = ReturnType<typeof store.getState>