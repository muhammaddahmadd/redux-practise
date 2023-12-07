import { combineReducers, createStore } from "redux";
// import { Reducer } from "react";
const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const customerInitialState = {
  fullname: "",
  id: "",
  created: "",
};

function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "Account/Open":
      return { ...state, balance: state.balance + action.payload };
    case "Withdraw/Cash":
      return { ...state, balance: state.balance - action.payload };
    case "Loan/Apply":
      if (state.loan > 0) return;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "Loan/Repay":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        id: action.payLoad.id,
        created: action.payLoad.created,
      };
    case "account/updateName":
      return { ...state, fullname: action.payLoad };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

// store.dispatch({ type: "Account/Open", payload: 500 });

// store.dispatch({ type: "Withdraw/Cash", payload: 100 });
// store.dispatch({
//   type: "Loan/Apply",
//   payload: { amount: 300, purpose: "For buying a phone" },
// });

// console.log(store.getState());

function deposit(amount) {
  return { type: "Account/Open", payload: amount };
}
function withdraw(amount) {
  return { type: "Withdraw/Cash", payload: amount };
}

function getLoan(amount, purpose) {
  return { type: "Loan/Apply", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "Loan/Repay" };
}
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(300));
console.log(store.getState());
store.dispatch(getLoan(100, "To invest into NFTs"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullname, id) {
  return {
    type: "customer/createCustomer",
    paylod: { fullname, id, created: new Date().toISOString() },
  };
}

function updateName(fullname) {
  return { type: "account/updateName", payload: fullname };
}

store.dispatch(createCustomer("Ahmad", "36502-24115409"));
console.log(store.getState());
store.dispatch(updateName("Rana Muhammad Ahmad"));
console.log(store.getState());
