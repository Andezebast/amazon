import React, { FC } from "react";
import TableContent from "../components/TableContentComponent";
import { accounts } from "../data";
const Account: FC = () => {
  /*-------------------------*/
  return (
    <div>
      <p>AccountPage!</p>
      <TableContent data={accounts} />
    </div>
  );
};

export default Account;
