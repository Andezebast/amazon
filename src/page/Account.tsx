import { FC } from "react";
import CustomTableContent from "../components/CustomTableContent/CustomTableContent";
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
  const tableSelect = (
    currentPageData: IAccount[],
    sortingTable: Function,
    setCurrentData: Function
  ) => {
    const handleChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrentData(sortingTable(currentPageData, event.target.value));
    };
    return (
      <select onChange={handleChangeEvent} defaultValue="none">
        <option value="none" disabled>
          Виберіть значення
        </option>
        <option value="alphabet">A-Z</option>
        <option value="reverse">Z-A</option>
        <option value="data">By date</option>
      </select>
    );
  };
  /*-------------------------*/
  const filterField: string[] = ["email", "authToken"];
  function filterTable(data: IAccount[], value: string) {
    let filterData: IAccount[] = [];

    filterField.forEach((field) => {
      filterData = filterData.concat(
        data.filter((item) =>
          item[field].toLowerCase().includes(value.toLowerCase())
        )
      );
    });
    return filterData;
  }
  /*-------------------------*/
  function sortingTable(data: IAccount[], value: string) {
    let sortingData: IAccount[] = [];
    switch (value) {
      case "alphabet":
        sortingData = data.sort((a, b) => {
          const emailA = a.email.toLowerCase();
          const emailB = b.email.toLowerCase();
          if (emailA < emailB) {
            return -1;
          }
          if (emailA > emailB) {
            return 1;
          }
          return 0;
        });
        break;
      case "reverse":
        sortingData = data.sort((a, b) => {
          const emailA = a.email.toLowerCase();
          const emailB = b.email.toLowerCase();
          if (emailA > emailB) {
            return -1;
          }
          if (emailA < emailB) {
            return 1;
          }
          return 0;
        });
        break;
      case "data":
        sortingData = data.sort((a, b) => {
          const dateA = new Date(a.creationDate.split(".").reverse().join("-"));
          const dateB = new Date(b.creationDate.split(".").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        });

        // const dateComparison = new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime();
        // sortingData = data.sort((a, b) => {
        //   const dateA = new Date(a.creationDate);
        //   const dateB = new Date(b.creationDate);
        //   console.log(dateA, "dateA");
        //   console.log(dateB, "dateB");
        //   if (dateA > dateB) {
        //     return 1;
        //   }
        //   if (dateA < dateB) {
        //     return -1;
        //   }
        //   return 0;
        // });
        break;
    }
    console.log(sortingData, "sortingData");
    return sortingData;
  }
  /*-------------------------*/
  return (
    <>
      <p
        style={{
          textAlign: "center",
          paddingBottom: "50px",
          fontSize: "24px",
          fontWeight: "500",
          margin: "0",
        }}
      >
        Account Page!
      </p>
      <CustomTableContent
        data={accounts}
        /*----------------------*/
        tableHeader={tableHeader}
        tableRow={tableRow}
        tableSelect={tableSelect}
        /*----------------------*/
        filterTable={filterTable}
        /*----------------------*/
        sortingTable={sortingTable}
      />
    </>
  );
};

export default Account;
