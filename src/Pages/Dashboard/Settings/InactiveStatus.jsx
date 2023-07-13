import { FaRegDotCircle } from "react-icons/fa";

export default function InactiveStatus() {
  return (
    <div className="Settings-InactiveStatus">
      <FaRegDotCircle className="Settings-DotCircle" />
      <span className="Settings-InactiveStatus_text">inactive</span>
    </div>
  );
}
