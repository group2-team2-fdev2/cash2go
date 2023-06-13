import React from "react";
import SmallStopCircleIcon from "./SmallStopCircleIcon";

export default function Rejected() {
  return (
    <div>
      <div className="dashboard-overview-status-wrapper rejected">
      <SmallStopCircleIcon />
        <p className="dashboard-overview-status">Rejected</p>
      </div>
    </div>
  );
}
