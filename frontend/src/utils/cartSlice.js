import { createSlice, getState } from "@reduxjs/toolkit";
// import store from "./store";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
    const existingItemIndex=state.items.findIndex(item=>item.id===action.payload.id)
    
    if(existingItemIndex !==-1){
      state.items[existingItemIndex].inCart+=1
    }
    else{
      state.items.push({...action.payload,inCart:1})
    }
    
    
    
    
    
      // // console.log(action.payload)
      // const cartItem = state.items.find(
      //   (item) => item.id === action.payload.id
      // );
      // if (!cartItem) {
      //   state.items.push(action.payload);
      //   console.log("add new");
      // } else {
      //   state.items.map(item=>item.inCart)
      //   console.log("plus one");
      // }
    },

    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
//this is the way we do export given in docs
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
