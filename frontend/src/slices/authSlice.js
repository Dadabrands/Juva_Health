import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientInfo: localStorage.getItem("patientInfo")
    ? JSON.parse(localStorage.getItem("patientInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.patientInfo = action.payload;
      localStorage.setItem("patientInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.patientInfo = null;
      localStorage.removeItem("patientInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
