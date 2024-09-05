import React from "react";

import { UsersLoader } from "./ui/users/users-loader";
import { UsersErrorMessage } from "./ui/users/users-error-message";
import { UsersNotFound } from "./ui/users/users-not-found";
import { UsersTableHead } from "./ui/users/users-table-head";
import { UsersResults } from "./ui/users/users-results";

export const UserTable: React.FC = () => {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full mx-auto border border-gray-200 shadow-md">
        <UsersTableHead />
        <UsersResults />    
      </table>

      <UsersErrorMessage />
      <UsersLoader />
      <UsersNotFound />
    </div>
  );
};
