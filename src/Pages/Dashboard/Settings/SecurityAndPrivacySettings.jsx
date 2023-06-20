import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

export default function SecurityAndPrivacySettings() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };

  return (
    <table className="SecurityAndPrivacySettings">
      <thead className="SecurityAndPrivacySettings-TableHead">
        <tr>
          <th className="SecurityAndPrivacySettings-TableHead_header">
            Security & Privacy
          </th>
          <th className="SecurityAndPrivacySettings-TableHead_header">
            Status
          </th>
          <th className="SecurityAndPrivacySettings-TableHead_header">
            Edit/Set Value
          </th>
        </tr>
      </thead>
      <tbody className="SecurityAndPrivacySettings-TableBody">
        <tr>
          <td className="SecurityAndPrivacySettings-TableBody_data">
            Two Factor Authentication
          </td>
          <td
            onClick={handleToggle1}
            className="SecurityAndPrivacySettings-TableBody_icon"
          >
            {toggle1 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            onClick={handleToggle2}
            className="SecurityAndPrivacySettings-TableBody_icon"
          >
            {toggle2 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
        </tr>
        <tr>
          <td className="SecurityAndPrivacySettings-TableBody_data">
            Log in with Security Question
          </td>
          <td
            onClick={handleToggle3}
            className="SecurityAndPrivacySettings-TableBody_icon"
          >
            {toggle3 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            onClick={handleToggle4}
            className="SecurityAndPrivacySettings-TableBody_icon"
          >
            <TbEdit className="Edit-icon" />
          </td>
        </tr>
        <tr>
          <td className="SecurityAndPrivacySettings-TableBody_data">
            Log out after 30 minutes inactive
          </td>
          <td
            onClick={handleToggle4}
            className="SecurityAndPrivacySettings-TableBody_icon"
          >
            {toggle4 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            // onClick={handleToggle2}
            className="SecurityAndPrivacySettings-TableBody_icon"
          >
            <TbEdit className="Edit-icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
