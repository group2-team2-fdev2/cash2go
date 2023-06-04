// library
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// style
import "../../Auth.css";
// component
import LeftLoginLayout from "../../components/LeftLoginLayout";
import ResetButton from "../../components/ResetButton";
import Legal from "../../components/Legal";
import NoticeIcon from "../../Components/NoticeIcon";
import WrongIcon from "../../Components/WrongIcon";

export default function SecurityQuestion1() {
  // State variables
  const [securityQuestion, setSecurityQuestion] = useState(""); // Stores security question
  const [status, setStatus] = useState(""); // Stores status message
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [isModalOpen, setModalOpen] = useState(false); // Tracks modal visibility state

  const navigate = useNavigate(); // Navigation function

  // Get email from URL query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const fetchSecurityQuestion = useCallback(async () => {
    try {
      // Send request to server to fetch the security question from the database
      const response = await axios.get(
        `https://cash2go-backendd.onrender.com/api/v1/user/get-security-question?email=${email}`
      );
      setSecurityQuestion(response.data.data.question); // Set the fetched security question
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message); // Set error message from response
        setTimeout(() => {
          setStatus("");
        }, "5000"); // Clear status message after 5 seconds
      }
    }
  }, [email]);

  useEffect(() => {
    // Fetch security question from the database during component mount
    fetchSecurityQuestion();
  }, [fetchSecurityQuestion]);

  // Handles modal visibilty
  const toggleModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true
    // toggleModal();

    const email = values.email; // Get password value from form
    const securityQuestionAnswer = values.securityQuestionAnswer; // Get security question answer value from form

    try {
      // Send request to server to authenticate the user email and password
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/reset-password?email=${email}`,
        {
          securityQuestion,
          securityQuestionAnswer: securityQuestionAnswer,
        }
      );
      const isAuthenticated = response.data; // Get authentication status from response
      console.log(isAuthenticated);
      if (isAuthenticated) {
        // If user is authenticated, call the open modal function to open modal
        toggleModal();
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message); // Set error message from response
        setTimeout(() => {
          setStatus("");
        }, "5000"); // Clear status message after 5 seconds
      }
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  return (
    <>
      <main className="layout-component">
        <LeftLoginLayout />
        <section className="form-wrapper">
          <header className="reset title">Reset Password</header>
          {status && <p className="status-message">{status}</p>}
          {/* Formik setup */}
          <Formik
            initialValues={{
              // securityQuestion: securityQuestion || "", // Initializes the `securityQuestion` field with the value of the `securityQuestion` variable if it exists, otherwise it initializes it as an empty string
              securityQuestionAnswer: "",
              email: email || "", // Initializes the `email` field with the value of the `email` variable if it exists, otherwise it initializes it as an empty string
            }}
            validationSchema={Yup.object({
              securityQuestionAnswer: Yup.string().required(
                "Security Question Answer is required"
              ),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-field-wrapper">
                  <label htmlFor="securityQuestion" className="label">
                    Email
                  </label>
                  <Field
                    name="securityQuestion"
                    type="text"
                    value={securityQuestion || ""}
                    disabled
                    className="input"
                  />
                </div>
                <div className="form-field-wrapper">
                  <label htmlFor="securityQuestionAnswer" className="label">
                    Security Question Answer
                  </label>
                  <Field
                    name="securityQuestionAnswer"
                    type="text"
                    autoComplete="off"
                    className={
                      errors.securityQuestionAnswer &&
                      touched.securityQuestionAnswer
                        ? "input-error input"
                        : "input"
                    }
                  />
                  <ErrorMessage
                    name="securityQuestionAnswer"
                    component="div"
                    className="error-message"
                  />
                </div>
                <ResetButton isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
          <Legal />
        </section>
        {isModalOpen && (
          <section className="modal-background">
            <div className="modal-container2">
              <NoticeIcon />
              <h3 className="modal-title">Reset Link</h3>
              <p className="modal-message">
                A password reset link has been sent to
              </p>
              <p className="user-email">{email}</p>
              <div className="close-modal" onClick={toggleModal}>
                <WrongIcon />
              </div>
              <button
                className="continue-button"
                onClick={() => {
                  setModalOpen(false);
                  navigate("/"); // Navigate to the login page
                }}
              >
                Continue
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
