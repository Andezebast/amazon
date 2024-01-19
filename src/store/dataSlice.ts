import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IData {
  accountID: string;
  profileID: string;
}

const initialState: IData = {
  accountID: "1",
  profileID: "1",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getAccountID(state, action: PayloadAction<string>) {
      state.accountID = action.payload;
    },
    getProfileID(state, action: PayloadAction<string>) {
      state.profileID = action.payload;
    },
  },
});

export default dataSlice.reducer;
