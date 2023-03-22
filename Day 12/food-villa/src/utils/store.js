// Creating Redux Store

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * Installation of redux toolkit and react-redux
 * 
 * 1. npm i @reduxjs/toolkit
 * 2. npm i react-redux
 * 
 * 
 * 
 * How the Redux Store Created and Slices Created ?
 * ==================================================
 * 1. Redux Store
 * ==================================================
 *  - Name of the store here we use "store"
 *      - Inside store.js
 *          - Import {configureStore} from "@reduxjs/toolkit"
 *
 *              - const store = configureStore ({})
 *
 *              - export default store;
 *
 * ====================================================
 * Now where use store - here we use store in App.js
 * ====================================================
 *  - Import {Provider} from "react-redux"
 *
 *      <Provider store={name of store. we use store itself}>
 *
 *          <Header/>
 *          <Outlet/>
 *          <Footer/>
 *
 *      <Provider>
 *
 * =====================================================================
 * Now we create Slice for our store.
 * - we create cartSlice
 * =====================================================================
 *      - inside cartSlice.js
 *          - Import {createSlice} from "@reduxjs/toolkit"
 *
 *      Now creating cartSlice
 *
 *        const cartSlice = createSlice({
 *
 *              name: "cart",
 *              initalState: { items: { [] } },
 *              
 *              reducers: {
                      addItem: (state, action) => {
                        state.items.push(action.payload);
                      },
                      removeItem: (state, action) => {
                        state.items.pop();
                      },
                      clearCart: (state) => {
                        state.items = [];
                      },
                    },
 *
 *                  })
 * 
 * 
 *    We are Exporting
 *      
 *        export const { addItem, removeItem, clearCart } = cartSlice.actions;

          export default cartSlice.reducer;

* =====================================================================================
  Now we come back to store and created the cart slice in our store
  =====================================================================================
   - Inside store.js
 *          - import {configureStore} from "@reduxjs/toolkit"
            - import cartSlice from "./cartSlice";
 *
 *              - const store = configureStore ({
 *                      
 *                      reducer: {
 *                          / Name : slice
 *                          cart: cartSlice,
 *                          user: userSlice,
 *                          auth: authSlice,
 *                      }
 *                
 *               })
 *
 *              - export default store;
        
        



 *  */
