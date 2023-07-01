import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export default function NotificationSettings() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle = (toggle, setToggle) => {
    setToggle(!toggle);
  };

  return (
    <table className="Settings-table">
      <thead className="Settings-thead">
        <tr>
          <th className="Settings-th">Notification</th>
          <th className="Settings-th">In-App Notification</th>
          <th className="Settings-th">Email Notification</th>
        </tr>
      </thead>
      <tbody className="Settings-tbody">
        <tr>
          <td className="Settings-tbody_data">New Application</td>
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
        </tr>
      </tbody>
    </table>
  );
}
