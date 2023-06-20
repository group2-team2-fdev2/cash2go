import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export default function NotificationSettings() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <table className="NotificationSettings">
      <thead className="NotificationSettings-TableHead">
        <tr>
          <th className="NotificationSettings-TableHead_header">
            Notification
          </th>
          <th className="NotificationSettings-TableHead_header">
            In-App Notification
          </th>
          <th className="NotificationSettings-TableHead_header">
            Email Notification
          </th>
        </tr>
      </thead>
      <tbody className="NotificationSettings-TableBody">
        <tr>
          <td className="NotificationSettings-TableBody_data">
            New Application
          </td>
          <td
            onClick={handleToggle1}
            className="NotificationSettings-TableBody_icon"
          >
            {toggle1 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            onClick={handleToggle2}
            className="NotificationSettings-TableBody_icon"
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
