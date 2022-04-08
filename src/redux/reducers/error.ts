import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ErrorMessage {
  message: string;
  code: number;
  type: string;
  field?: string;
  params?: string[];
}

type ErrorState = {
  errors: ErrorMessage[];
};

const initialState: ErrorState = {
  errors: [],
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<any>) {
      state.errors = action.payload || [];
    },
    clearError(state) {
      state.errors = [];
    },
  },
});

export const ErrorAction = errorSlice.actions;
export default errorSlice.reducer;
