const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = accountInitialState, action) {
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

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "Account/Open", payload: amount };
  return function (dispatch, getState) {};
}
export function withdraw(amount) {
  return { type: "Withdraw/Cash", payload: amount };
}

export function getLoan(amount, purpose) {
  return { type: "Loan/Apply", payload: { amount, purpose } };
}

export function payLoan() {
  return { type: "Loan/Repay" };
}
