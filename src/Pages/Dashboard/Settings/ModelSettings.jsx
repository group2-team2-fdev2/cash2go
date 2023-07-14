import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { ModelSettingsRow } from "./ModelSettingsRow";
import { v4 as uuidv4 } from "uuid";

export default function ModelSettings() {
  const [rows, setRows] = useState([
    {
      id: uuidv4(),
      name: "Default Model",
      description: "Machine Learning/AI",
      date: "01/04/23",
      creator: "Default",
      toggleActive: false,
    },
  ]);

  const handleActiveToggle = (rowId) => {
    setRows((prevRows) => {
      return prevRows.map((row) => {
        if (row.id === rowId) {
          return {
            ...row,
            toggleActive: !row.toggleActive,
          };
        }
        return row;
      });
    });
  };

  // const addRow = () => {
  //   setRows((prevRows) => [
  //     ...prevRows,
  //     {
  //       id: uuidv4(),
  //       name: "",
  //       description: "",
  //       date: "",
  //       creator: "",
  //       toggleActive: false,
  //     },
  //   ]);
  // };
  return (
    <table className="Settings-table">
      <thead className="Settings-thead">
        <tr>
          <th className="Settings-th">Model Name</th>
          <th className="Settings-th">
            Status <BsArrowDown />
          </th>
          <th className="Settings-th">
            Date Created <BsArrowDown />
          </th>
          <th className="Settings-th">
            Created by <BsArrowDown />
          </th>
          <th className="Settings-th">Edit</th>
        </tr>
      </thead>
      <tbody className="Settings-tbody">
        {rows.map((row) => (
          <ModelSettingsRow
            key={row.id}
            name={row.name}
            description={row.description}
            date={row.date}
            creator={row.creator}
            toggleActive={row.toggleActive}
            handleActiveToggle={() => handleActiveToggle(row.id)}
            // addRow={addRow}
          />
        ))}
      </tbody>
    </table>
  );
}
