import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./users/users-api";
import { filtersReducer } from "./filters/filters-slice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;