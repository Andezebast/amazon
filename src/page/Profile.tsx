import React, { FC } from "react";
import CustomTableContent from "../components/CustomTableWrapper/CustomTableWrapper";
import { profile } from "../data";
import { IProfile } from "../models/IProfile";
import { useAppSelector } from "../hooks/redux";
import { useAppDispatch } from "../hooks/redux";
import { dataSlice } from "../store/dataSlice";
import { useNavigate } from "react-router-dom";

const filterField: string[] = ["profileid", "country", "marketplace"];
/*-------------------------*/
const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  /*-------------------------*/
  const accountID = useAppSelector((state) => state.dataReducer.accountID);
  const currentProfileMass = profile.filter(
    (field) => field.accountid === accountID
  );
  /*-------------------------*/
  const tableHeader = () => {
    return (
      <tr>
        <th>Profile ID</th>
        <th>Country</th>
        <th>Marketplace</th>
      </tr>
    );
  };
  const tableRow = (item: IProfile) => {
    const handleRowEvent = (id: string) => {
      dispatch(dataSlice.actions.getProfileID(id));
      navigate("/campaign");
    };
    return (
      <tr key={item.profileid} onClick={() => handleRowEvent(item.profileid)}>
        <td>{item.profileid}</td>
        <td>{item.country}</td>
        <td>{item.marketplace}</td>
      </tr>
    );
  };
  const tableSelect = (
    currentPageData: IProfile[],
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
        <option value="alphabet">Marketplace A-Z</option>
        <option value="reverse">Marketplace Z-A</option>
      </select>
    );
  };
  /*-------------------------*/
  function filterTable(data: IProfile[], value: string) {
    let filterData: IProfile[] = [];

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
  function sortingTable(data: IProfile[], value: string) {
    let sortingData: IProfile[] = [];
    switch (value) {
      case "alphabet":
        sortingData = data.sort((a, b) => {
          const marketplaceA = a.marketplace.toLowerCase();
          const marketplaceB = b.marketplace.toLowerCase();
          if (marketplaceA < marketplaceB) {
            return -1;
          }
          if (marketplaceA > marketplaceB) {
            return 1;
          }
          return 0;
        });
        break;
      case "reverse":
        sortingData = data.sort((a, b) => {
          const marketplaceA = a.marketplace.toLowerCase();
          const marketplaceB = b.marketplace.toLowerCase();
          if (marketplaceA > marketplaceB) {
            return -1;
          }
          if (marketplaceA < marketplaceB) {
            return 1;
          }
          return 0;
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
        Profile for Account ID №{accountID}
      </p>
      <CustomTableContent
        data={currentProfileMass}
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

export default Profile;
