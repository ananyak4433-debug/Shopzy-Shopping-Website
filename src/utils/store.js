import {configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore({
    reducer:{
        cartItem: cartReducer
    }
});

export default appStore