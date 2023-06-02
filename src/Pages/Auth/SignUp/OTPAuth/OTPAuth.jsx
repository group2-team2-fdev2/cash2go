// import { Link, useNavigate } from "react-router-dom";
import "../SignUp.css";
import LeftSignUpLayout2 from "../Components/LeftSignUpLayout2";
import Legal from "../Components/Legal";
import OTPForm from "./OTPForm";

import { useNavigate } from "react-router-dom";

export default function OTPAuth() {
  const navigate = useNavigate();

  const nextStep = async (isAuthenticated) => {
    if (isAuthenticated) {
      navigate("/security-question-auth");
    }
  };

  return (
    <div>
      <div className="layout-component">
        <LeftSignUpLayout2 />
        <div className="form-wrapper">
          <OTPForm nextStep={nextStep} />
          <Legal />
        </div>
      </div>
    </div>
  );
}
