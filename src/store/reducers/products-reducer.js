import { Add_Product, Get_Products } from "../actions/products-actions";
export const products_reducer = (state = [{id: 1, title: "Red Scarf"}], action) => {
  switch (action.type) {
    case Get_Products:
      return [...action.payload]; //making a shallow copy of the array.
    case Add_Product:
      return [...state, action.payload];
    default:
      return state;
  }
};
