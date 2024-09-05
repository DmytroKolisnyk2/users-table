interface TableCellProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
  isHead?: boolean;
}

const className = "py-2 px-4 border text-left w-1/4";

export const TableCell = ({ children, isHead, ...props }: TableCellProps) => {
  if (isHead) {
    return (
      <th className={className} scope="col" {...props}>
        {children}
      </th>
    );
  }

  return (
    <td className={className} {...props}>
      {children}
    </td>
  );
};
