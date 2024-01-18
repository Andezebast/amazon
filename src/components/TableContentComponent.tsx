import React, { FC, useEffect, useState } from "react";
import SortingComponent from "./SortingComponent";
import FilterComponent from "./FilterComponent";
import PaginationComponent from "./PaginationComponent";
import TableContentComponent from "./TableComponent";
import { IAccount } from "../models/IAccount";

interface ITableProps {
  data: IAccount[];
}

const Table: FC<ITableProps> = ({ data }) => {
  const [currentData, setCurrentData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  /*-------------------------*/
  const limit: number = 4;
  const totalPages: number = Math.ceil(data.length / limit);
  /*-------------------------*/
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentPageData: IAccount[] = data.slice(startIndex, endIndex);
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
      <TableContentComponent data={currentData} />
      <PaginationComponent
        total={totalPages}
        current={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default Table;
