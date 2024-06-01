import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students : []
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const { setStudents } = studentSlice.actions;
export default studentSlice.reducer;

