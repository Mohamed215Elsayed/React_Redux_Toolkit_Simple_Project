import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "../slices/bank-slice";
import productsSlice from "../slices/products-slice";
export default configureStore({
  devTools: true,
  reducer: {
    bank: bankSlice,
    products: productsSlice,
  },
});
