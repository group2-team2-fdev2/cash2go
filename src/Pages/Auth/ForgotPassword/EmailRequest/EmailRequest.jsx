// library
import { useState } from "react";
import axios from "axios";
// style
import "../ForgotPassword.css";
// component
import SecurityQuestion from "../SecurityQuestionReset/SecurityQuestion"; // this should be deleted
import LeftLoginLayout from "../components/LeftLoginLayout";
import ArrowRight from "../components/ArrowRight";
import Legal from "../components/Legal";

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
      <div className="layout-component">
        <LeftLoginLayout />
        <div className="form-wrapper">
          <h3 className="reset title">Reset Password</h3>
          <div className="user_email-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              placeholder="myworkemail@work.com"
              onChange={handleEmailChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="verification-instruction">
              Please provide the email used for registration
            </p>
          </div>

          <button onClick={handleClick} className="button-wrapper">
            <span className="button-text">Next</span>
            <ArrowRight />
          </button>
          <Legal />
        </div>
      </div>
      {isEmailVerified && <SecurityQuestion />}
    </>
  );
}
