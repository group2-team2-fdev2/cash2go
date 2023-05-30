import { useState } from "react";
import "../ForgotPassword.css";
// components
import LeftLoginLayout from "../../LogIn/components/LeftLoginLayout";
import Legal from "../../LogIn/components/Legal";

export default function SecurityQuestion() {
  const [question, setQuestion] = useState(""); // Security question selected by user
  const [answer, setAnswer] = useState(""); // User's answer to the security question
  const [errorMessage, setErrorMessage] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // User's email for password reset

  // Simulated data for the security question and answer
  const securityQuestion = "Where did you meet your Spouse?";
  const correctAnswer = "bahamas";

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleResetClick = () => {
    if (answer === "") {
      setErrorMessage("Answer is required");
      return;
    }

    if (answer.toLowerCase() !== correctAnswer) {
      setErrorMessage("Incorrect answer");
      return;
    }

    setErrorMessage("");
    setUserEmail("user@example.com"); // Replace with the user's email fetched from the database
    setResetLinkSent(true);
    // Perform further actions like sending reset link to user's email
  };

  // Simulated: Set the selected security question from user signup
  // Replace this with the actual logic to fetch and set the selected question
  // during user signup or retrieve it from the user profile
  useState(() => {
    setQuestion(securityQuestion);
  }, []);

  return (
    <>
      <div className="layout-component">
        <LeftLoginLayout />
        <div className="form-wrapper">
          <h3 className="reset title">Reset Password</h3>
          <div className="user_question-wrapper">
            <label htmlFor="question">Security Question</label>
            <input type="text" id="question" value={question} disabled />
          </div>
          <div className="user_question-wrapper">
            <label htmlFor="answer">Your answer</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={handleAnswerChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

          <button onClick={handleResetClick} className="button-wrapper">
            <span className="button-text">Reset</span>
          </button>
          <Legal />

          {resetLinkSent && (
            <div className="modal-background">
              <div className="modal-container">
                <h3 className="modal-title">Reset Link</h3>
                <p className="modal-instruction">
                  A password reset link has been sent to{" "}
                </p>
                <p className="user-email">{userEmail}.</p>
                <button className="continue-button">Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
