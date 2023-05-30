import React, { useState, useEffect } from "react";
import "./SecurityQuestion.css";
import axios from "axios"; // Import axios for API requests

// components
import LeftLoginLayout from "../../LogIn/components/LeftLoginLayout";
import Legal from "../../LogIn/components/Legal";

export default function SecurityQuestion(props) {
  const {email} = props;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);
 

  useEffect(() => {
    // Fetch the security question from the database during component mount
    fetchSecurityQuestion();
  }, []);

  const fetchSecurityQuestion = async () => {
    try {
      // Make an API request to fetch the security question from the database
      const response = await axios.get(
        "https://your-api-endpoint/security-question" // Replace with your API endpoint
      );

      // Set the fetched security question
      setQuestion(response.data.question);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to fetch security question");
    }
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleResetClick = async () => {
    if (answer === "") {
      setErrorMessage("Answer is required");
      return;
    }

    try {
      // Make an API request to verify the user's answer
      const response = await axios.post(
        "https://your-api-endpoint/verify-answer", // Replace with your API endpoint
        { answer }
      );

      if (response.data.isCorrect) {
        // If the answer is correct, send the password reset link to the user's email
        await sendResetLink();
      } else {
        setErrorMessage("Incorrect answer");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred");
    }
  };

  const sendResetLink = async () => {
    try {
      // Make an API request to send the password reset link to the user's email
      const response = await axios.post(
        "https://your-api-endpoint/send-reset-link", // Replace with your API endpoint
        { email: {email} } // Pass the user's email address
      );

      if (response.data.success) {
        // Password reset link sent successfully
        setResetLinkSent(true);
      } else {
        setErrorMessage("Failed to send reset link");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred");
    }
  };

  return (
    <>
      <div className="emailrequest-component">
        <>
          <LeftLoginLayout />
        </>
        <div className="form-wrapper">
          <h3 className="reset-title">Reset Password</h3>
          <div className="user_email-wrapper">
            <label htmlFor="question">Security Question</label>
            <input type="text" id="question" value={question} disabled />
          </div>
          <div className="user_email-wrapper">
            <label htmlFor="answer">Your answer</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={handleAnswerChange}
            />
            {errorMessage && (
              <p className="securityanswer-error">{errorMessage}</p>
            )}
          </div>

          <button onClick={handleResetClick} className="reset-btn">
            <span className="btn-text">Reset</span>
          </button>
          <div className="legal-wrapper">
            <Legal />
          </div>

          {resetLinkSent && (
            <div className="overlay">
              <div className="popup">
                <h3 className="popup-title">Reset Link</h3>
                <p>A password reset link has been sent to</p>
                <p className="user-email">{email}</p>
                <button className="continue-btn">Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
