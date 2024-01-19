import React, { FC } from "react";
import CustomTableContent from "../components/CustomTableContent/CustomTableContent";
import { campaign } from "../data";
import { ICampaign } from "../models/ICampaign";
import { useAppSelector } from "../hooks/redux";

const Campaign: FC = () => {
  /*-------------------------*/
  const profileID = useAppSelector((state) => state.dataReducer.profileID);
  const currentCampaignMass = campaign.filter(
    (field) => field.profileid === profileID
  );
  /*-------------------------*/
  const tableHeader = () => {
    return (
      <tr>
        <th>Campaign ID</th>
        <th>Clicks</th>
        <th>Cost</th>
        <th>Date</th>
      </tr>
    );
  };
  const tableRow = (item: ICampaign) => {
    return (
      <tr key={item.campaignid}>
        <td>{item.campaignid}</td>
        <td>{item.clicks}</td>
        <td>{item.cost}</td>
        <td>{item.date}</td>
      </tr>
    );
  };
  const tableSelect = (
    currentPageData: ICampaign[],
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
        <option value="ascending">Cost Ascending</option>
        <option value="descending">Cost Descending</option>
        <option value="date">By Date</option>
      </select>
    );
  };
  /*-------------------------*/
  const filterField: string[] = ["campaignid"];
  function filterTable(data: ICampaign[], value: string) {
    let filterData: ICampaign[] = [];

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
  function sortingTable(data: ICampaign[], value: string) {
    let sortingData: ICampaign[] = [];
    switch (value) {
      case "ascending":
        sortingData = data.sort((a, b) => {
          const costA = a.cost.toLowerCase();
          const costB = b.cost.toLowerCase();
          if (costA < costB) {
            return -1;
          }
          if (costA > costB) {
            return 1;
          }
          return 0;
        });
        break;
      case "descending":
        sortingData = data.sort((a, b) => {
          const costA = a.cost.toLowerCase();
          const costB = b.cost.toLowerCase();
          if (costA > costB) {
            return -1;
          }
          if (costA < costB) {
            return 1;
          }
          return 0;
        });
        break;
      case "date":
        sortingData = data.sort((a, b) => {
          const dateA = new Date(a.date.split(".").reverse().join("-"));
          const dateB = new Date(b.date.split(".").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        });
        break;
    }
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
        Campaign Page!
      </p>
      <CustomTableContent
        data={currentCampaignMass}
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

export default Campaign;
