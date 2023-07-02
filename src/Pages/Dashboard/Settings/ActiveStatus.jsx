import { CiCircleCheck } from "react-icons/ci";

export default function ActiveStatus() {
  return (
    <div className="Settings-ActiveStatus">
      <CiCircleCheck className="Settings-CircleCheck" />
      <span className="Settings-ActiveStatus_text">active</span>
    </div>
  );
}
