// library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// style
import "../../Auth.css";
// component
import LeftLoginLayout from "../../components/LeftLoginLayout";
import NextButton from "../../components/NextButton";
import Legal from "../../components/Legal";

export default function EmailRequest() {
  // State variables
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [status, setStatus] = useState(""); // Stores status message

  const navigate = useNavigate(); // Navigation function

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true

    const email = values.email; // Get password value from form

    try {
      // Send request to server to authenticate the user email and password
      const response = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/user/verify-email",
        {
          email: email,
        }
      );
      const isAuthenticated = response.data; // Get authentication status from response
      console.log(isAuthenticated);
      if (isAuthenticated) {
        // If user is authenticated, navigate to security question page
        navigate(`/security-question?email=${encodeURIComponent(email)}`);
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
      <main className="Auth-layout-component">
        <LeftLoginLayout />
        <section className="Auth-form-wrapper">
          <header className="Auth-reset Auth-title">Reset Password</header>
          {status && <p className="Auth-status-message">{status}</p>}
          {/* Formik setup */}
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
                .required("Email is required"),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="Auth-form-field-wrapper">
                  <label htmlFor="email" className="Auth-label">
                    Email
                  </label>
                  <div
                    className={
                      errors.email && touched.email
                        ? "Auth-input-error Auth-form-field"
                        : "Auth-form-field"
                    }
                  >
                    <Field
                      name="email"
                      type="email"
                      autoComplete="off"
                      placeholder="myworkemail@work.com"
                      className="Auth-input"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="Auth-error-message"
                  />
                  <p className="Auth-instruction">
                    Please provide the email used for registration
                  </p>
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
