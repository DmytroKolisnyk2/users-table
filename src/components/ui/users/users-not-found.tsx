import { useSelector } from "react-redux";
import { isSearchResultsEmptySelector } from "../../../store/users/users-selector";

export const UsersNotFound = () => {
  const isSearchResultsEmpty = useSelector(isSearchResultsEmptySelector);

  if (!isSearchResultsEmpty) return null;

  return (
    <p className="text-center text-gray-500 mt-2" aria-live="polite">
      No users found matching the criteria.
    </p>
  );
};
