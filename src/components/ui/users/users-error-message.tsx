import { useGetUsersQuery } from "../../../store/users/users-api";

export const UsersErrorMessage = () => {
  const { error } = useGetUsersQuery();

  if (!error) return null;

  return <p className="text-red-500 text-md text-center mt-4">Error fetching users.</p>;
};
