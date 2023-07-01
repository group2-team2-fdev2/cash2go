import { BsArrowDown, BsToggleOff, BsToggleOn } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { useState } from "react";
import ActiveStatus from "./ActiveStatus";
import InactiveStatus from "./InactiveStatus";

export default function ModelSettings() {
  const [toggleActive1, setToggleActive1] = useState(false);

  const handleActiveToggle = (toggleActive, setToggleActive) => {
    setToggleActive(!toggleActive);
  };
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
        <tr>
          <td className="Settings-tbody_data">
            <div className="Settings-tbody_model">
              <div
                onClick={() =>
                  handleActiveToggle(toggleActive1, setToggleActive1)
                }
              >
                {toggleActive1 ? (
                  <BsToggleOff className="ToggleOff-icon" />
                ) : (
                  <BsToggleOn className="ToggleOn-icon" />
                )}
              </div>
              <div>
                <p className="Settings-tbody_model_title">Default Model</p>
                <p className="Settings-tbody_model_subtitle">
                  Machine Learning/AI
                </p>
              </div>
            </div>
          </td>
          <td className="Settings-tbody_data">
            <div
              onClick={() =>
                handleActiveToggle(toggleActive1, setToggleActive1)
              }
            >
              {toggleActive1 ? <InactiveStatus /> : <ActiveStatus />}
            </div>
          </td>
          <td className="Settings-tbody_data">
            <p className="Settings-tbody_date">01/04/23</p>
          </td>
          <td className="Settings-tbody_data">
            <p className="Settings-tbody_creator">Default</p>
          </td>
          <td className="Settings-tbody_data">
            <TbEdit className="Edit-icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
