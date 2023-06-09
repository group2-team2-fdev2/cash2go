// library
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// style
import "../../Auth.css";
// component
import LeftLoginLayout3 from "../../components/LeftSignUpLayout4";
import NextButton from "../../components/NextButton";
import Legal from "../../components/Legal";

export default function SecurityQuestionAuth() {
  // State variables
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [status, setStatus] = useState(""); // Stores status message

  const navigate = useNavigate(); // Navigation function

  // Get email from URL query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true

    const email = values.email; // Get email value from form
    const securityQuestion = values.securityQuestion; // Get security question value from form
    const securityQuestionAnswer = values.securityQuestionAnswer; // Get security question answer value from form

    try {
      // Send request to server to confirm security question answer
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/security-question?email=${email}`,
        {
          securityQuestion: securityQuestion,
          securityQuestionAnswer: securityQuestionAnswer,
        }
      );
      console.log(response.data);
      const isAuthenticated = response.data; // Get authentication status from response
      if (isAuthenticated) {
        // If user is authenticated, navigate to password authentication page
        navigate(`/password-auth?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message); // Set error message from response
        setTimeout(() => {
          setStatus(""); // Clear status message after 5 seconds
        }, "5000");
      }
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  return (
    <>
      <main className="Auth-layout-component">
        <LeftLoginLayout3 />
        <section className="Auth-form-wrapper">
          {status && <p className="Auth-status-message">{status}</p>}
          {/* Formik setup */}
          <Formik
            initialValues={{
              securityQuestion: "",
              securityQuestionAnswer: "",
              email: email || "", // Initializes the `email` field with the value of the `email` variable if it exists, otherwise it initializes it as an empty string
            }}
            validationSchema={Yup.object({
              securityQuestion: Yup.string().required(),
              securityQuestionAnswer: Yup.string().required(
                "Security Question Answer is required"
              ),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="Auth-form-field-wrapper">
                  <label htmlFor="securityQuestion" className="Auth-label">
                    Security Question
                  </label>
                  <Field
                    name="securityQuestion"
                    as="select"
                    className={
                      errors.securityQuestion && touched.securityQuestion
                        ? "Auth-input-error Auth-select"
                        : "Auth-select"
                    }
                  >
                    <option className="option">
                      Please select a security question
                    </option>
                    <option
                      value="Where did you meet your spouse"
                      className="Auth-option"
                    >
                      Where did you meet your spouse?
                    </option>
                    <option
                      value="What is the name of your favorite childhood friend"
                      className="Auth-option"
                    >
                      What is the name of your favorite childhood friend?
                    </option>
                    <option
                      value="In what city did you meet your spouse/significant other"
                      className="Auth-option"
                    >
                      In what city did you meet your spouse/significant other?
                    </option>
                    <option
                      value={`What is your mother's maiden name`}
                      className="Auth-option"
                    >
                      {`What is your mother's maiden name?`}
                    </option>
                    <option
                      value="What is the name of your first pet"
                      className="Auth-option"
                    >
                      What is the name of your first pet?
                    </option>
                  </Field>
                </div>
                <div className="Auth-form-field-wrapper">
                  <label
                    htmlFor="securityQuestionAnswer"
                    className="Auth-label"
                  >
                    Security Question Answer
                  </label>
                  <div
                    className={
                      errors.securityQuestionAnswer &&
                      touched.securityQuestionAnswer
                        ? "Auth-input-error Auth-form-field"
                        : "Auth-form-field"
                    }
                  >
                    <Field
                      name="securityQuestionAnswer"
                      type="text"
                      autoComplete="off"
                      className="Auth-input"
                    />
                  </div>
                  <ErrorMessage
                    name="securityQuestionAnswer"
                    component="div"
                    className="Auth-error-message"
                  />
                </div>
                <NextButton isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
          <Legal />
        </section>
      </main>
    </>
  );
}
