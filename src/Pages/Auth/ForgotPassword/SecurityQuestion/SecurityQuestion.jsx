import { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// style
import "../../Auth.css";
// components
import LeftLoginLayout from "../../LogIn/components/LeftLoginLayout";
import Legal from "../../components/Legal";
import LoadingGif from "../../components/LoadingGif";

export default function SecurityQuestion() {
  // const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");
  const [securityQuestion, setSecurityQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchSecurityQuestion = useCallback(async () => {
    try {
      // Make an API request to fetch the security question from the database
      const response = await axios.get(
        `https://cash2go-backendd.onrender.com/api/v1/user/get-security-question?email=${email}`
      );

      // Set the fetched security question
      setSecurityQuestion(response.data.data.question);
    } catch (error) {
      // console.log(error);
      setErrorMessage("Unable to display security question. Please try again");
      setSecurityQuestion("");
    }
  }, [email]);

  useEffect(() => {
    // Fetch the security question from the database during component mount
    fetchSecurityQuestion();
  }, [fetchSecurityQuestion]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleResetClick = async () => {
    if (answer === "") {
      setErrorMessage("Answer is required");
      return;
    }

    try {
      setLoading(true);
      // Make an API request to verify the user's answer and send the password reset link
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/reset-password?email=${email}`,
        { securityQuestion, securityQuestionAnswer: answer }
      );

      if (response.data.error === "Wrong answer to security question") {
        setErrorMessage("Incorrect answer");
      } else {
        // If the answer is correct, display the password reset modal
        setResetLinkSent(true);
        setModalVisible(true);
      }
    } catch (error) {
      // console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.error &&
        error.response.data.error === "Wrong answer to security question"
      ) {
        setErrorMessage("Incorrect answer");
      } else {
        setErrorMessage("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleContinueClick = () => {
    setModalVisible(false);
    // navigate("/new-password")
  };
  return (
    <>
      <div className="layout-component">
        <LeftLoginLayout />
        <div className="form-wrapper">
          <h3 className="reset title">Reset Password</h3>
          <div className="user_question-wrapper">
            <label htmlFor="question">Security Question</label>
            <input
              type="text"
              id="question"
              className="security-question-password-reset"
              value={securityQuestion || ""}
              disabled
            />
          </div>
          <div className="user_question-wrapper">
            <label htmlFor="answer">Your answer</label>
            <input
              type="text"
              id="answer"
              className="security-answer-password-reset"
              value={answer}
              onChange={handleAnswerChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

          <button
            onClick={handleResetClick}
            disabled={loading}
            className="button-wrapper"
          >
            {loading ? (
              <LoadingGif />
            ) : (
              <span className="button-text">Reset</span>
            )}
          </button>
          <Legal />

          {resetLinkSent && modalVisible && (
            <div className="modal-background">
              <div className="modal-container">
                <h3 className="modal-title">Reset Link</h3>
                <p className="modal-instruction">
                  A password reset link has been sent to
                </p>
                <p className="user-email">{email}</p>
                <button
                  className="continue-button"
                  onClick={handleContinueClick}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
