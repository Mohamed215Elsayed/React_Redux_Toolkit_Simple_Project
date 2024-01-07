export const Withdraw_Money = "Withdraw_Money";
export const Deposit_Money = "Deposit_Money";

export const Withdraw = (amount) => {
  return {
    type: Withdraw_Money,
    payload: amount,
  };
};
export const Deposit = (amount) => {
  return {
    type: Deposit_Money,
    payload: amount,
  };
};
