import { configureStore } from "@reduxjs/toolkit";
import applicantReducer from "./applicantSlice";

const store = configureStore({
  reducer: {
    applicant: applicantReducer,
  },
});

export default store;
