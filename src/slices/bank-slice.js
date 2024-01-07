import { createSlice } from "@reduxjs/toolkit";
export const bankSlice = createSlice({
  name: "bankSlice",
  initialState: 1000,
  reducers: {
    Deposit: (state, action) => {
      return (state = state + action.payload);
    },
    Withdraw: (state, action) => {
      return (state = state - action.payload);
    },
  },
});
export const { Deposit, Withdraw } = bankSlice.actions;
export default bankSlice.reducer;