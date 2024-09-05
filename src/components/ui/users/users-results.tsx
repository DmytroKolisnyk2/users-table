import { useSelector } from "react-redux";
import { TableCell } from "../table/table-cell";
import { filteredUsersSelector } from "../../../store/users/users-selector";

export const UsersResults = () => {
  const filteredUsers = useSelector(filteredUsersSelector);

  return (
    <tbody>
      {filteredUsers.map((user) => (
        <tr
          key={user.id}
          className="hover:bg-gray-200 ease-linear duration-200 max-w-full"
          role="row"
        >
          <TableCell role="cell">{user.name}</TableCell>
          <TableCell role="cell">{user.username}</TableCell>
          <TableCell role="cell">{user.email}</TableCell>
          <TableCell role="cell">{user.phone}</TableCell>
        </tr>
      ))}
    </tbody>
  );
};
