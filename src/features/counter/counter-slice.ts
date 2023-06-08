import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateProps {
  value: number;
}

const initialState: StateProps = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { decrease, decreaseAmount, increment, incrementAmount } =
  counterSlice.actions;

export const counterReducer = counterSlice.reducer;
