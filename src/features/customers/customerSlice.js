import { createSlice } from "@reduxjs/toolkit";
// import accountSlice from "../accounts/accountSlice";
const initialState = {
  fullName: "",
  id: "",
  created: "",
};
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, id) {
        return {
          payload: { fullName, id, created: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.id = action.payload.id;
        state.created = action.payload.created;
      },
    },
    updateCustomer(state, action) {
      state.fullName = action.payload;
    },
  },
});
export const { createCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;
// export default function customerReducer(state = customerInitialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         id: action.payload.id,
//         created: action.payload.created,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payLoad };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, id) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, id, created: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
