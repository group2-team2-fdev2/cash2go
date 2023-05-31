import { ApprovedDisplay, PendingDisplay, RejectedDisplay } from "./childDisplay";
import "./display.css";

export default function Display() {
  return (
    <>
      <div className="parentdisplay-field">
        <ApprovedDisplay />
        <PendingDisplay />
        <RejectedDisplay />
      </div>
    </>
  );
}
