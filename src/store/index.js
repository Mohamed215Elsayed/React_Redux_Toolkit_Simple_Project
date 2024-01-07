import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import { bank_reducer } from "./reducers/bank-reducer";
import { products_reducer } from "./reducers/products-reducer";

const reducer_App = combineReducers({
  bank: bank_reducer,
  products: products_reducer
});

export const store = createStore(reducer_App, applyMiddleware(thunk));
export default store;
// import { Deposit, Withdraw } from "./actions/bank-actions";
// import {Append_Product, Get_Products } from "./actions/products-actions";
// store.dispatch(Withdraw(100)); 
// store.dispatch(Deposit(200));