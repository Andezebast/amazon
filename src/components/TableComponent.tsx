import React, { FC } from "react";
import { IAccount } from "../models/IAccount";
import Table from "react-bootstrap/Table";

interface ICustomTableProps {
  data: IAccount[];
}

const CustomTable: FC<ICustomTableProps> = ({ data }) => {
  /*-------------------------*/
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Account ID</th>
          <th>Email</th>
          <th>AuthToken</th>
          <th>creationDate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.accountid}</td>
            <td>{item.email}</td>
            <td>{item.authToken}</td>
            <td>{item.creationDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
