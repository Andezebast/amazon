import SearchSvg from "../../svg/SearchSvg";
import "./CustomFilter.css";

interface IFilterProps<T> {
  data: T[];
  setCurrentData: Function;
  filterTable: Function;
  currentPageData: T[];
}

function Filter<T>({
  data,
  setCurrentData,
  filterTable,
  currentPageData,
}: IFilterProps<T>) {
  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) {
      setCurrentData(filterTable(data, event.target.value));
    } else {
      setCurrentData(currentPageData);
    }
  };
  /*-------------------------*/
  return (
    <div className="filter">
      <input type="text" placeholder="Search..." onChange={handleChangeEvent} />
      <SearchSvg />
    </div>
  );
}

export default Filter;
