import { useEffect, useState } from "react";
import CustomSorting from "../CustomSorting/CustomSorting";
import CustomFilter from "../CustomFilter/CustomFilter";
import CustomTable from "../CustomTable";
import CustomPagination from "../CustomPagination";
import "./CustomTableContent.css";

interface ITableProps<T> {
  data: T[];
  /*----------------------*/
  tableHeader: () => JSX.Element;
  tableRow: (item: T) => JSX.Element;
  tableSelect: (
    data: T[],
    sortingTable: Function,
    setCurrentData: Function
  ) => JSX.Element;
  /*----------------------*/
  filterTable: Function;
  /*----------------------*/
  sortingTable: Function;
}

function Table<T>({
  data,
  tableHeader,
  tableRow,
  tableSelect,
  filterTable,
  sortingTable,
}: ITableProps<T>) {
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
    <div className="custom-table">
      <div className="custom-table-filter">
        <CustomSorting
          currentPageData={currentPageData}
          setCurrentData={setCurrentData}
          /*----------------------*/
          sortingTable={sortingTable}
          /*----------------------*/
          tableSelect={tableSelect}
        />
        <CustomFilter
          data={data}
          setCurrentData={setCurrentData}
          /*----------------------*/
          filterTable={filterTable}
          /*----------------------*/
          currentPageData={currentPageData}
        />
      </div>
      <CustomTable
        data={currentData}
        tableHeader={tableHeader}
        tableRow={tableRow}
      />
      <CustomPagination
        total={totalPages}
        current={currentPage}
        onChangePage={handleChangePage}
      />
    </div>
  );
}

export default Table;
