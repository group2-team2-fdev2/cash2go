import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../SignUp.css";
import LeftSignUpLayout2 from "../Components/LeftSignUpLayout2";
import Legal from "../Components/Legal";
import axios from "axios"

export default function OTPAuth() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill('')); 
  const [error, setError] = useState('')

  const handleChange = (event, index) => {
    if (isNaN(event.target.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? event.target.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     const response = await axios.post ('https://cash2go-backendd.onrender.com/api/v1/user/verify-otp', {otp});
      //handle validation response
     if (response.data.valid) {
      navigate ("/secruity-quetion-auth")
   } else {
     setError('Invalid OTP, please try again ');
    }
    } catch (error) {
      setError(false)
     }
  }
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
                    value={otp}
                    onChange={handleChange}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
              {error && <p>{error}</p>}
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
          <button className="button-wrapper" onSubmit={handleSubmit}>
            <span className="button-text">Submit</span>
          </button>

          <Legal />
        </div>
      </div>
    </div>
  );
}
