import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

export default function SecurityAndPrivacySettings() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const handleToggle = (toggle, setToggle) => {
    setToggle(!toggle);
  };

  return (
    <table className="Settings-table">
      <thead className="Settings-thead">
        <tr>
          <th className="Settings-th">Security & Privacy</th>
          <th className="Settings-th">Status</th>
          <th className="Settings-th">Edit/Set Value</th>
        </tr>
      </thead>
      <tbody className="Settings-tbody">
        <tr>
          <td className="Settings-tbody_data">Two Factor Authentication</td>
          <td
            onClick={() => handleToggle(toggle1, setToggle1)}
            className="Settings-tbody_icon"
          >
            {toggle1 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td className="Settings-tbody_icon">
            <TbEdit className="Edit-icon" />
          </td>
        </tr>
        <tr>
          <td className="Settings-tbody_data">Log in with Security Question</td>
          <td
            onClick={() => handleToggle(toggle2, setToggle2)}
            className="Settings-tbody_icon"
          >
            {toggle2 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td className="Settings-tbody_icon">
            <TbEdit className="Edit-icon" />
          </td>
        </tr>
        <tr>
          <td className="Settings-tbody_data">
            Log out after 30 minutes inactive
          </td>
          <td
            onClick={() => handleToggle(toggle3, setToggle3)}
            className="Settings-tbody_icon"
          >
            {toggle3 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td className="Settings-tbody_icon">
            <TbEdit className="Edit-icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
