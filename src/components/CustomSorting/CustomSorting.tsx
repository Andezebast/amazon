import "./CustomSorting.css";

interface ISortingProps<T> {
  currentPageData: T[];
  sortingTable: Function;
  setCurrentData: Function;
  tableSelect: (
    data: T[],
    sortingTable: Function,
    setCurrentData: Function
  ) => JSX.Element;
}

function Sorting<T>({
  currentPageData,
  sortingTable,
  setCurrentData,
  tableSelect,
}: ISortingProps<T>) {
  return (
    <div className="sorting">
      {tableSelect(currentPageData, sortingTable, setCurrentData)}
    </div>
  );
}

export default Sorting;
