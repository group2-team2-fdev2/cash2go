// library
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//Style
import "../../Auth.css";
// component
import LeftSignUpLayout4 from "../../components/LeftSignUpLayout4";
import OpenPasswordIcon from "../../components/OpenPasswordIcon";
import ClosePasswordIcon from "../../components/ClosePasswordIcon";
import SignupButton from "../../components/SignupButton";
import Legal from "../../components/Legal";
import NoticeIcon from "../../components/NoticeIcon";
import WrongIcon from "../../components/WrongIcon";

export default function PasswordAuth() {
  // State variables
  const [showPassword1, setShowPassword1] = useState(false); // Tracks form password visibility state
  const [showPassword2, setShowPassword2] = useState(false); // Tracks form password visibility state
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [isCompleted, setCompleted] = useState(false); // Tracks API response state
  const [isModalOpen, setModalOpen] = useState(false); // Tracks modal visibility state
  const [status, setStatus] = useState(""); // Stores status message

  const navigate = useNavigate(); // Navigation function

  // Get email from URL query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  // Handles first password field visibilty
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  // Handles second password field visibilty
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  // Handles modal visibilty
  const toggleModal = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
    if (isModalOpen === true) {
      setCompleted(false);
    }
  };

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true
    // setCompleted(true);
    // toggleModal();

    const email = values.email; // Get email value from form
    const username = values.username; // Get username value from form
    const password = values.password; // Get password value from form
    const confirmPassword = values.confirmPassword; // Get confirm password value from form

    try {
      // Send request to server to authenticate username and password
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/signup?email=${email}`,
        {
          username: username,
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      console.log(response.data);
      const isAuthenticated = response.data; // Get authentication status from response
      if (isAuthenticated) {
        setCompleted(true); // If user is authenticated, set completed state to true
        toggleModal(); // If user is authenticated, call the open modal function to open modal
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
        <LeftSignUpLayout4 isCompleted={isCompleted} />
        <section className="Auth-form-wrapper">
          {status && <p className="Auth-status-message">{status}</p>}
          {/* Formik setup */}
          <Formik
            initialValues={{
              username: "",
              password: "",
              confirmPassword: "",
              email: email || "", // Initializes the `email` field with the value of the `email` variable if it exists, otherwise it initializes it as an empty string
            }}
            validationSchema={Yup.object({
              username: Yup.string().required("Username is required"),
              password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters")
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
                ),
              confirmPassword: Yup.string()
                .required("Confirm Password is required")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="Auth-form-field-wrapper">
                  <label htmlFor="username" className="Auth-label">Username</label>
                  <Field
                    name="username"
                    type="text"
                    autoComplete="off"
                    className={
                      errors.username && touched.username ? "Auth-input-error Auth-input" : "Auth-input"
                    }
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="Auth-error-message"
                  />
                </div>
                <div className="Auth-form-field-wrapper">
                  <label htmlFor="password" className="Auth-label">Password</label>
                  <div className="Auth-form-field">
                    <div onClick={togglePasswordVisibility1}>
                      {showPassword1 ? (
                        <OpenPasswordIcon />
                      ) : (
                        <ClosePasswordIcon />
                      )}
                    </div>
                    <Field
                      name="password"
                      type={showPassword1 ? "text" : "password"}
                      autoComplete="off"
                      className={
                        errors.password && touched.password ? "Auth-input-error Auth-input" : "Auth-input"
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="Auth-error-message"
                  />
                </div>
                <div className="Auth-form-field-wrapper">
                  <label htmlFor="confirmPassword" className="Auth-label">Re-enter Password</label>
                  <div className="Auth-form-field">
                    <div onClick={togglePasswordVisibility2}>
                      {showPassword2 ? (
                        <OpenPasswordIcon />
                      ) : (
                        <ClosePasswordIcon />
                      )}
                    </div>
                    <Field
                      name="confirmPassword"
                      type={showPassword2 ? "text" : "password"}
                      autoComplete="off"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "Auth-input-error Auth-input"
                          : "Auth-input"
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="Auth-error-message"
                  />
                </div>
                <SignupButton isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
          <Legal />
        </section>
        {isModalOpen && (
          <section className="Auth-modal-background">
            <div className="Auth-modal-container1">
              <NoticeIcon />
              <h1 className="Auth-modal-title">Congratulations !!!</h1>
              <p className="Auth-modal-message">
                Your signup for our Cash2Go app is now complete. Get ready to
                unlock great financial posibilities and achieve your goals.
              </p>
              <div className="Auth-close-modal" onClick={toggleModal}>
                <WrongIcon />
              </div>
              <button
                className="Auth-continue-button"
                onClick={() => {
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
