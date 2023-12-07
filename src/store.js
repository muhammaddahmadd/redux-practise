import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
// import { Reducer } from "react";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(300));
// console.log(store.getState());
// store.dispatch(getLoan(100, "To invest into NFTs"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("Ahmad", "36502-24115409"));
// console.log(store.getState());
// store.dispatch(updateName("Rana Muhammad Ahmad"));
// console.log(store.getState());

// store.dispatch({ type: "Account/Open", payload: 500 });

// store.dispatch({ type: "Withdraw/Cash", payload: 100 });
// store.dispatch({
//   type: "Loan/Apply",
//   payload: { amount: 300, purpose: "For buying a phone" },
// });

// console.log(store.getState());

export default store;
