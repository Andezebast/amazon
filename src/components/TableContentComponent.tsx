import { useEffect, useState } from "react";
import SortingComponent from "./SortingComponent";
import FilterComponent from "./FilterComponent";
import PaginationComponent from "./PaginationComponent";
import TableComponent from "./TableComponent";

interface ITableProps<T> {
  data: T[];
  tableHeader: () => JSX.Element;
  tableRow: (item: T) => JSX.Element;
}

function Table<T>({ data, tableHeader, tableRow }: ITableProps<T>) {
  const [currentData, setCurrentData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  /*-------------------------*/
  const limit: number = 4;
  const totalPages: number = Math.ceil(data.length / limit);
  /*-------------------------*/
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPageData: T[] = data.slice(startIndex, endIndex);
  /*-------------------------*/
  useEffect(() => {
    setCurrentData(currentPageData);
  }, [currentPage]);
  /*-------------------------*/
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  /*-------------------------*/
  return (
    <>
      <SortingComponent />
      <FilterComponent />
      <TableComponent
        data={currentData}
        tableHeader={tableHeader}
        tableRow={tableRow}
      />
      <PaginationComponent
        total={totalPages}
        current={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
}

export default Table;
