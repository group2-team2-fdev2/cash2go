import React from "react";
import "../EmailAndCompanyIDAuth/EmailAndCompanyIDAuth.css";
import Steps from "./Steps";
import Cash2goLogo from "./Cash2goLogo";


function LeftSignUp() {
  return (
    <div className="left">
      <div className="leftdes">
        <Cash2goLogo/>
      </div>
      <div className="steps">
        <Steps />
      </div>
    </div>
  );
}

export default LeftSignUp;
