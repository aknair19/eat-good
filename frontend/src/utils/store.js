import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
  * import configureStore fromn RTK
  * const store=configureStore({})
  * add PROVIDER to app 
  * from react-redux <Provider store={store}>APP</Provider>
  * create splice const cartSplice=createSplice({name:'cart', initialState:{items:[]}, reducers:{addToCart:fn,clearCart:fn}})
  * export const {addToCart,clearCart}=cartSlice.actions
  * export default cartSlice.reducer
  * import cartSlice in store
  * inside configureStore({
  * reducer:{
  * cart:cartSlice,
  * user:userSlice
  * ...
  * }
  * })
  
 */
