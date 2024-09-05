import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilters } from "../../common/types/filters";

const initialState: IFilters = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ name: keyof IFilters; value: string }>) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
