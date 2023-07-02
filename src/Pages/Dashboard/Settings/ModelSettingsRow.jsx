import ActiveStatus from "./ActiveStatus";
import InactiveStatus from "./InactiveStatus";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import PropTypes from "prop-types";

export function ModelSettingsRow({
  handleActiveToggle,
  toggleActive,
  addRow,
  name,
  description,
  date,
  creator,
}) {
  return (
    <tr>
      <td className="Settings-tbody_data">
        <div className="Settings-tbody_model">
          <div onClick={handleActiveToggle}>
            {toggleActive ? (
              <BsToggleOff className="ToggleOff-icon" />
            ) : (
              <BsToggleOn className="ToggleOn-icon" />
            )}
          </div>
          <div>
            <p className="Settings-tbody_model_title">{name}</p>
            <p className="Settings-tbody_model_subtitle">{description}</p>
          </div>
        </div>
      </td>
      <td className="Settings-tbody_data">
        <div onClick={handleActiveToggle}>
          {toggleActive ? <InactiveStatus /> : <ActiveStatus />}
        </div>
      </td>
      <td className="Settings-tbody_data">
        <p className="Settings-tbody_date">{date}</p>
      </td>
      <td className="Settings-tbody_data">
        <p className="Settings-tbody_creator">{creator}</p>
      </td>
      <td className="Settings-tbody_data">
        <TbEdit className="Edit-icon" onClick={addRow} />
      </td>
    </tr>
  );
}

ModelSettingsRow.propTypes = {
  handleActiveToggle: PropTypes.func,
  toggleActive: PropTypes.bool,
  addRow: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  creator: PropTypes.string,
};
