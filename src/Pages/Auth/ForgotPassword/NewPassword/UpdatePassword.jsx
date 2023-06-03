// library
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// component
import LeftLoginLayout from "../components/LeftLoginLayout";
import OpenPasswordIcon from "../components/OpenPasswordIcon";
import ClosePasswordIcon from "../components/ClosePasswordIcon";
import ResetButton from "../components/ResetButton";
import Legal from "../components/Legal";

export default function UpdatePassword() {
  const [showPassword1, setShowPassword1] = useState(false); // Tracks form password visibility state
  const [showPassword2, setShowPassword2] = useState(false); // Tracks form password visibility state
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
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

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true
    alert(JSON.stringify(values, null, 2));

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
        navigate("/");
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
    <div className="layout-component">
      <LeftLoginLayout />
      <div className="form-wrapper">
        <h3 className="reset title">Reset Password</h3>
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
                <label htmlFor="password">Password</label>
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
                      errors.password && touched.password ? "error" : ""
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
                <label htmlFor="confirmPassword">Re-enter Password</label>
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
                        ? "error"
                        : ""
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
      </div>
    </div>
  );
}
