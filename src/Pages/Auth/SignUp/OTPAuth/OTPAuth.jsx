import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SignUp.css";
import LeftSignUpLayout2 from "../Components/LeftSignUpLayout2";
import Legal from "../Components/Legal";

export default function OTPAuth() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="layout-component">
        <LeftSignUpLayout2 />
        <div className="form-wrapper">
          <div className="otp-container">
          <div className="otp-wrapper">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  // keybordType="numeric"
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
            </div>
            </div>
          <div className="verification-instruction">
            <p className="sub-title"> Enter OTP</p>
            <p className="instruction">
              Enter the four digits OTP sent to your mail{" "}
            </p>
            <p className="instruction">
              Click <Link className="link">HERE</Link> to resend OTP
            </p>
          </div>
          {/* <button className="button" onClick={() => setOtp([...otp.map(() => "")])}>
                Clear
              </button> */}
          <button className="button-wrapper" onClick={handleSubmit}>
            <span className="button-text">Submit</span>
          </button>

          <Legal />
        </div>
      </div>
    </div>
  );
}
