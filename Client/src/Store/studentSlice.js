import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students : [],
  usernames : []
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setUsernames : (state,action) => {
      state.usernames = action.payload;
    }
  },
});

export const { setStudents ,setUsernames } = studentSlice.actions;
export default studentSlice.reducer;

