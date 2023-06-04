// library
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// style
import "../../Auth.css";
// component
import LeftLoginLayout from "../../components/LeftLoginLayout";
import OpenPasswordIcon from "../../components/OpenPasswordIcon";
import ClosePasswordIcon from "../../components/ClosePasswordIcon";
import ResetButton from "../../components/ResetButton";
import Legal from "../../components/Legal";
import WrongIcon from "../../Components/WrongIcon";
import NoticeIcon from "../../Components/NoticeIcon";

export default function UpdatePassword() {
  const [showPassword1, setShowPassword1] = useState(false); // Tracks form password visibility state
  const [showPassword2, setShowPassword2] = useState(false); // Tracks form password visibility state
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [isModalOpen, setModalOpen] = useState(false); // Tracks modal visibility state
  const [status, setStatus] = useState(""); // Stores status message

  const navigate = useNavigate(); // Navigation function
  const { token } = useParams(); // Extract the token parameter from the URL using the useParams hook

  // Handles first password field visibilty
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  // Handles second password field visibilty
  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword); // Set form submission state to true
  };

  // Handles modal visibilty
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true
    // toggleModal();

    const password = values.password; // Get password value from form
    const confirmPassword = values.confirmPassword; // Get confirm password value from form

    try {
      // Send request to server to authenticate new password
      const response = await axios.patch(
        `http://cash2go-backendd.onrender.com/api/v1/user/update-password/${token}`,
        {
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      console.log(response.data);
      const isAuthenticated = response.data; // Get authentication status from response
      if (isAuthenticated) {
        toggleModal();
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
      <main className="layout-component">
        <LeftLoginLayout />
        <section className="form-wrapper">
          <header className="reset title">Reset Password</header>
          {status && <p className="status-message">{status}</p>}
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
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
                <div className="form-field-wrapper">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <div className="form-field">
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
                        errors.password && touched.password
                          ? "input-error input"
                          : "input"
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-field-wrapper">
                  <label htmlFor="confirmPassword" className="label">
                    Re-enter Password
                  </label>
                  <div className="form-field">
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
                          ? "input-error input"
                          : "input"
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
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
              <h1 className="modal-title">Congratulations !!!</h1>
              <p className="modal-message">
                Your password is updated successfully
              </p>
              <div className="close-modal" onClick={toggleModal}>
                <WrongIcon />
              </div>
              <button
                className="continue-button"
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
