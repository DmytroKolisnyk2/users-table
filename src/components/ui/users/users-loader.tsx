import { useGetUsersQuery } from "../../../store/users/users-api";

const loadersData = [...Array(10).keys()];

export const UsersLoader = () => {
  const { isLoading } = useGetUsersQuery();

  if (!isLoading) return null;

  return (
    <div className="animate-pulse space-y-2 w-full mt-2" aria-live="polite" aria-busy="true">
      {loadersData.map((_, idx) => (
        <div key={idx} className="h-8 bg-gray-300 rounded-md" aria-hidden="true"></div>
      ))}
      <span className="sr-only">Loading user data</span>
    </div>
  );
};
