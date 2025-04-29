import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []   
    },
    reducers:{
        addItem: (state, action) => {
            //Mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            // Mutating the state directly
            // state.items.length = 0;

            // Either mutate it or return the Object
            return{items: []}
        },
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;