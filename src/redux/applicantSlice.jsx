import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedApplicant: null,
};
  
const applicantSlice = createSlice({
    name: "applicant",
    initialState,
    reducers: {
      selectApplicant: (state, action) => {
        state.selectedApplicant = action.payload;
      },
    },
});
  
export const { selectApplicant } = applicantSlice.actions;

export default applicantSlice.reducer