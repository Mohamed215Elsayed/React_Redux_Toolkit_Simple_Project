import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//by react-redux
// import { Withdraw, Deposit } from "./store/actions/bank-actions";
// import { Add_Product, Get_Products } from "./store/actions/products-actions";
// import Products from "./components/Products";
//by react-toolkit
import { Deposit, Withdraw } from "./slices/bank-slice";
import { Append_Product, Get_Products } from "./slices/products-slice";
import Products from "./components/Products";
function App() {
  const amount = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <p>user money: {amount}</p>
        <button
          onClick={() => {
            dispatch(Withdraw(100));
          }}
        >
          Withdraw
        </button>
        <button
          onClick={() => {
            dispatch(Deposit(200));
          }}
        >
          Deposit
        </button>
        <Products />
    </div>
  );
}

export default App;
