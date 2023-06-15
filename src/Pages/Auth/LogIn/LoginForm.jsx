// library
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
// component
import OpenPasswordIcon from "../components/OpenPasswordIcon";
import ClosePasswordIcon from "../components/ClosePasswordIcon";
import LoginButton from "../components/LoginButton";

export default function LoginForm({ loginToApp }) {
  // State variables
  const [showPassword, setShowPassword] = useState(false); // Tracks form password visibility state
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [status, setStatus] = useState(""); // Stores status message

  // Handles first password field visibilty
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true

    const email = values.email; // Get password value from form
    const password = values.password; // Get password value from form

    try {
      // Send request to server to authenticate the user email and password
      const response = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      const isAuthenticated = response.data; // Get authentication status from response
      console.log(isAuthenticated);
      if (isAuthenticated) {
        // If user is authenticated, pass the loginToApp function as a prop to the parent component
        loginToApp(isAuthenticated);
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
      {status && <p className="Auth-status-message">{status}</p>}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
              "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
            ),
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="Auth-form-field-wrapper">
              <label htmlFor="email" className="Auth-label">
                Email
              </label>
              <Field
                name="email"
                type="email"
                autoComplete="off"
                placeholder="myworkemail@work.com"
                className={
                  errors.email && touched.email ? "Auth-input-error Auth-input" : "Auth-input"
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="Auth-error-message"
              />
            </div>
            <div className="Auth-form-field-wrapper">
              <label htmlFor="password" className="Auth-label">
                Password
              </label>
              <div className="Auth-form-field">
                <div onClick={togglePasswordVisibility}>
                  {showPassword ? <OpenPasswordIcon /> : <ClosePasswordIcon />}
                </div>
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  className={
                    errors.password && touched.password
                      ? "Auth-input-error Auth-input"
                      : "Auth-input"
                  }
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="Auth-error-message"
              />
            </div>
            <LoginButton isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </>
  );
}

LoginForm.propTypes = {
  loginToApp: PropTypes.func.isRequired,
};
