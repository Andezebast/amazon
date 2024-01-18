import { FC } from "react";
import TableContent from "../components/TableContentComponent";
import { accounts } from "../data";
import { IAccount } from "../models/IAccount";
const Account: FC = () => {
  const tableHeader = () => {
    return (
      <tr>
        <th>Account ID</th>
        <th>Email</th>
        <th>AuthToken</th>
        <th>creationDate</th>
      </tr>
    );
  };
  const tableRow = (item: IAccount) => {
    return (
      <tr key={item.accountid}>
        <td>{item.accountid}</td>
        <td>{item.email}</td>
        <td>{item.authToken}</td>
        <td>{item.creationDate}</td>
      </tr>
    );
  };
  /*-------------------------*/
  return (
    <div>
      <p>AccountPage!</p>
      <TableContent
        data={accounts}
        tableHeader={tableHeader}
        tableRow={tableRow}
      />
    </div>
  );
};

export default Account;
