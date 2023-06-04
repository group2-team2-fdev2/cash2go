// library
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// style
import "../../Auth.css";
// component
import LeftLoginLayout from "../../components/LeftLoginLayout";
import LoadingGif from "../../Components/LoadingGif";
import ArrowRight from "../../Components/ArrowRight";
import Legal from "../../components/Legal";

export default function EmailRequest() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        navigate(`/security-question?email=${encodeURIComponent(email)}`); // Navigate to the security question page
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
      <div className="layout-component">
        <LeftLoginLayout />
        <div className="form-wrapper">
          <h3 className="reset title">Reset Password</h3>
          <div className="user_email-wrapper">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              className="input"
              name="email"
              type="email"
              autoComplete="on"
              value={email}
              placeholder="myworkemail@work.com"
              onChange={handleEmailChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="verification-instruction">
              Please provide the email used for registration
            </p>
          </div>

          <button
            onClick={handleClick}
            className="button-wrapper"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? (
              <LoadingGif />
            ) : (
              <>
                <span className="button-text">Next</span>
                <ArrowRight />
              </>
            )}
          </button>
          <Legal />
        </div>
      </div>
    </>
  );
}
