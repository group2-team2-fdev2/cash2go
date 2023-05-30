import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EmailRequest.css";
import LeftLoginLayout from "../../LogIn/components/LeftLoginLayout";
import ArrowRight from "../../LogIn/components/ArrowRight";
import Legal from "../../LogIn/components/Legal";
import loadingGif from "../../../../assets/LoadingGif.svg";

export default function EmailRequest() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();

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
      setIsLoading(true); // Start loading

      // Make a POST request to verify the email
      const response = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/user/verify-email",
        { email }
      );

      if (response.data.status === "success") {
        navigate("/security-question"); // Navigate to the security question page
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
    } finally {
      setIsLoading(false); // Stop loading
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
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="myworkemail@work.com"
              onChange={handleEmailChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <p className="email-verification">
            Please provide the email used for registration
          </p>
          <button
            onClick={handleClick}
            className="reset-btn"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <img src={loadingGif} alt="Loading" className="loading-gif" />
            ) : (
              <>
                <span className="btn-text">Next</span>
                <ArrowRight />
              </>
            )}
          </button>
          <div className="legal-wrapper">
            <Legal />
          </div>
        </div>
      </div>
    </>
  );
}
