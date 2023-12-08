import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const user = {
  email: "ranaahmad131@gmail.com",
  pwd: "mpqz10",
};

const initialState = {
  email: "",
  pwd: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: {
      prepare(email, pwd) {
        return { payload: { email, pwd } };
      },
      reducer(state, action) {
        state.email = action.payload.email;
        state.pwd = action.payload.pwd;
      },
    },
    login(state, action) {
      if (state.email === user.email && state.pwd === user.pwd) {
        const navigate = useNavigate();
        navigate("/app");
      }
    },
  },
});

export const { signUp, login } = authSlice.actions;
export default authSlice.reducer;
