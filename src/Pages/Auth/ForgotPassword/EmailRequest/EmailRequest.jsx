import React, { useState } from "react";
import axios from "axios";
import "./EmailRequest.css";
import SecurityQuestion from "../SecurityQuestionReset/SecurityQuestion";
import LeftLoginLayout from "../../LogIn/components/LeftLoginLayout";
import ArrowRight from "../../LogIn/components/ArrowRight";
import Legal from "../../LogIn/components/Legal";

export default function EmailRequest() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handleClick = async () => {
    if (email === "") {
      setErrorMessage("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    try {
      const response = await axios.get(
        "https://cash2go-backendd.onrender.com/api/v1/user/verify-email",
        {
          params: {
            email: email,
          },
        }
      );

      if (response.data.status === "success") {
        setIsEmailVerified(true);
      } else {
        setErrorMessage("Email does not exist");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response);
        setErrorMessage("Email does not exist");
      } else {
        console.log(error);
        setErrorMessage("An error occurred");
      }
    }
  };

  return (
    <>
      <div className="emailrequest-component">
        <LeftLoginLayout />
        <div className="form-wrapper">
          <h3 className="reset-title">Reset Password</h3>
          <div className="user_email-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              placeholder="myworkemail@work.com"
              onChange={handleEmailChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <p className="email-verification">
            Please provide the email used for registration
          </p>
          <button onClick={handleClick} className="reset-btn">
            <span className="btn-text">Next</span>
            <ArrowRight />
          </button>
          <div className="legal-wrapper">
            <Legal />
          </div>
        </div>
      </div>
      {isEmailVerified && <SecurityQuestion />}
    </>
  );
}

