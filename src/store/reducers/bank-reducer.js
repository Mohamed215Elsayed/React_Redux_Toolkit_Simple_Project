import { Deposit_Money, Withdraw_Money } from "../actions/bank-actions";
export const bank_reducer = (state = 1000, action) => {
    switch (action.type) {
      case Withdraw_Money:
        return state - action.payload;
      case Deposit_Money:
        return state + action.payload;
      default:
        return state;
    }
  };
  