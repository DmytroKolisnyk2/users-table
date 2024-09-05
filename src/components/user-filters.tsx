import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/filters/filters-slice";
import { IFilters } from "../common/types/filters";
import { allFiltersSelector } from "../store/filters/filters-selectors";

interface IFilterData {
  name: keyof IFilters;
  placeholder: string;
}

const filtersData: IFilterData[] = [
  { name: "name", placeholder: "Filter by Name" },
  { name: "username", placeholder: "Filter by Username" },
  { name: "email", placeholder: "Filter by Email" },
  { name: "phone", placeholder: "Filter by Phone" },
];

export const SearchFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(allFiltersSelector);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch(setFilter({ name: name as keyof IFilters, value }));
    },
    [dispatch, filters]
  );

  return (
    <div className="flex w-full items-center gap-2 flex-wrap">
      {filtersData.map((filter) => (
        <input
          key={filter.name}
          type="text"
          name={filter.name}
          value={filters[filter.name]}
          placeholder={filter.placeholder}
          aria-label={`Filter by ${filter.name}`}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 grow"
        />
      ))}
    </div>
  );
};
