import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";
// import
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
    auth: authReducer,
  },
});

export default store;
