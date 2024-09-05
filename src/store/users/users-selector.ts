import { createSelector } from "@reduxjs/toolkit";
import { userApi } from "./users-api";
import { allFiltersSelector } from "../filters/filters-selectors";
import { IUser } from "../../common/types/user";

const selectUsersResult = userApi.endpoints.getUsers.select();
const allUsersSelector = createSelector(
  selectUsersResult,
  (usersResult) => usersResult?.data ?? []
);

type UserFilterFields = keyof Omit<IUser, "id">;

export const filteredUsersSelector = createSelector(
  [allUsersSelector, allFiltersSelector],
  (users, filters) => {
    return users.filter((user) => {
      return Object.entries(filters).every(([key, value]) => {
        return user[key as UserFilterFields].toLowerCase().includes(value.toLowerCase());
      });
    });
  }
);

export const isSearchResultsEmptySelector = createSelector(
  [filteredUsersSelector, allFiltersSelector],
  (users, filters) => users.length === 0 && Object.values(filters).some((value) => value !== "")
);
