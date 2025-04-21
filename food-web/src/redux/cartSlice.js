import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        AddItem:(state, action) => {
         const existItem =  state.find((item) => item.id === action.payload.id);
         if(existItem) {
            const updatedItem = state.map((item) => {
                if(item.id === action.payload.id) {
                    return {...item, qty: item.qty + 1}
                }
                return item;
            });
            return updatedItem;
         }else{
             state.push(action.payload)
         }
        },
        RemoveItem:(state,action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        incItem:(state, action) => {
            const updatedItem = state.map((item) => {
                if(item.id === action.payload) {
                    return {...item, qty: item.qty + 1}
                }
                return item;
            });
            return updatedItem;
        },decItem:(state, action) => {
            const updatedItem = state.map((item) => {
                if(item.id === action.payload) {
                    return {...item, qty: item.qty - 1}
                }
                return item;
            });
            return updatedItem.filter(item => item.qty > 0);
        },
        ClearCart: () => {
            return [];
          }
    }
});


export const { AddItem, RemoveItem, decItem, incItem,  ClearCart } = cartSlice.actions;
export default cartSlice.reducer;