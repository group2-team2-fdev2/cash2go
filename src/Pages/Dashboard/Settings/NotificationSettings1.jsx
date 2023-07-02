import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export default function NotificationSettings() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);
  const [toggle8, setToggle8] = useState(false);

  const handleToggle = (toggle, setToggle) => {
    setToggle(!toggle);
  };

  const handleToggle2 = (toggle2, setToggle2) => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = (toggle3, setToggle3) => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = (toggle4, setToggle4) => {
    setToggle4(!toggle4);
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


        <tr>
          <td className="Settings-tbody_data">New Loan Status</td>
          <td
            onClick={() => handleToggle2(toggle3, setToggle3)}
            className="Settings-tbody_icon"
          >
            {toggle3 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            onClick={() => handleToggle2(toggle4, setToggle4)}
            className="Settings-tbody_icon"
          >
            {toggle4 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
        </tr>

        <tr>
          <td className="Settings-tbody_data">Loan Due Date</td>
          <td
            onClick={() => handleToggle3(toggle5, setToggle5)}
            className="Settings-tbody_icon"
          >
            {toggle5 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            onClick={() => handleToggle3(toggle6, setToggle6)}
            className="Settings-tbody_icon"
          >
            {toggle6 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
        </tr>

        <tr>
          <td className="Settings-tbody_data">Loan Repayment Date</td>
          <td
            onClick={() => handleToggle4(toggle7, setToggle7)}
            className="Settings-tbody_icon"
          >
            {toggle7 ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </td>
          <td
            onClick={() => handleToggle4(toggle8, setToggle8)}
            className="Settings-tbody_icon"
          >
            {toggle8 ? (
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
