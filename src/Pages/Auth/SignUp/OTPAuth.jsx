import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Auth/SignUp/OTPAuth.css";
// components
import LeftSignUpLayout from "../../../components/LeftSignUpLayout";

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
    <>
      <>
        <LeftSignUpLayout />
      </>
      <div className="form-wrapper">
        <div className="otp-container">
          <div className="otp">
            <div className="input-container">
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

            <p className="enter-otp"> Enter OTP</p>
            <p>Enter the four digits OTP sent to your mail </p>
            <p className="click-here">
              Click <Link className="here">HERE</Link> to resend OTP
            </p>
            <div className="button">
              <button onClick={() => setOtp([...otp.map(() => "")])}>
                Clear
              </button>
              <button onClick={handleSubmit}>Submit</button>
            </div>

            <div className="tandc-container">
              <p>Terms of use</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
