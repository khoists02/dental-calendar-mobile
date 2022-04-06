import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  isAuthenticated: boolean;
};

const initialState: UserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const UserAction = userSlice.actions;
export default userSlice.reducer;
