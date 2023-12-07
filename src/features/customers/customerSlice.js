const customerInitialState = {
  fullName: "",
  id: "",
  created: "",
};

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        id: action.payload.id,
        created: action.payload.created,
      };
    case "account/updateName":
      return { ...state, fullName: action.payLoad };
    default:
      return state;
  }
}

export function createCustomer(fullName, id) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, id, created: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
