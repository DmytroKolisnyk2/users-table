import { TableCell } from "../table/table-cell";

export const UsersTableHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr>
        <TableCell isHead>
          Name
        </TableCell>
        <TableCell isHead>
          Username
        </TableCell>
        <TableCell isHead>
          Email
        </TableCell>
        <TableCell isHead>
          Phone
        </TableCell>
      </tr>
    </thead>
  );
};
