import React from "react";
import SmallIconRight from "./SmallIconRight";

export default function Approved() {
  return (
    <div>
      <div className="dashboard-overview-status-wrapper approved">
          <SmallIconRight />
          <p className="dashboard-overview-status">Approved</p>
        </div>
    </div>
  );
}
