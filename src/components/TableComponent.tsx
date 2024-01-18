import Table from "react-bootstrap/Table";

interface ICustomTableProps<T> {
  data: T[];
  tableHeader: () => JSX.Element;
  tableRow: (item: T) => JSX.Element;
}

function CustomTable<T>({ data, tableHeader, tableRow }: ICustomTableProps<T>) {
  /*-------------------------*/
  return (
    <Table striped bordered hover responsive>
      <thead>{tableHeader()}</thead>
      <tbody>{data.map((item) => tableRow(item))}</tbody>
    </Table>
  );
}

export default CustomTable;
