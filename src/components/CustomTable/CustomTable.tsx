import Table from "react-bootstrap/Table";
import "./CustomTable.css";

interface ICustomTableProps<T> {
  data: T[];
  tableHeader: () => JSX.Element;
  tableRow: (item: T) => JSX.Element;
}

function CustomTable<T>({ data, tableHeader, tableRow }: ICustomTableProps<T>) {
  /*-------------------------*/
  return (
    <>
      {data.length ? (
        <Table striped bordered hover responsive>
          <thead>{tableHeader()}</thead>
          <tbody>{data.map((item) => tableRow(item))}</tbody>
        </Table>
      ) : (
        <div className="custom-table-empty">Table is Empty!</div>
      )}
    </>
  );
}

export default CustomTable;
