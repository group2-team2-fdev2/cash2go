// library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// style
import "../../Auth.css";
// component
import LeftSignUpLayout1 from "../../components/LeftSignUpLayout1";
import NextButton from "../../components/NextButton";
import Legal from "../../components/Legal";

export default function EmailAndCompanyIDAuth() {
  // State variables
  const [isSubmitting, setSubmitting] = useState(false); // Tracks form submission state
  const [status, setStatus] = useState(""); // Stores status message

  const navigate = useNavigate(); // Navigation function

  // Handles form submission
  const handleSubmit = async (values) => {
    setSubmitting(true); // Set form submission state to true

    const email = values.email; // Get email value from form
    const companyID = values.companyID; // Get company ID value from form

    try {
      // Send request to server to send OTP
      const response = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/user/send-otp",
        {
          email: email,
          companyID: companyID,
        }
      );
      const isAuthenticated = response.data; // Get authentication status from response
      console.log(isAuthenticated);
      if (isAuthenticated) {
        // If user is authenticated, navigate to OTP authentication page
        navigate(`/otp-auth?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message); // Set error message from response
        setTimeout(() => {
          setStatus("");
        }, 5000); // Clear status message after 5 seconds
      }
    } finally {
      setSubmitting(false); // Set form submission state to false
    }
  };

  return (
    <>
      <main className="layout-component">
        <LeftSignUpLayout1 />
        <section className="form-wrapper">
          <header className="title">Sign Up</header>
          {status && <p className="status-message">{status}</p>}
          {/* Formik setup */}
          <Formik
            initialValues={{
              email: "",
              companyID: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
                .required("Email is required"),
              companyID: Yup.string()
                .matches(/^\d{6}$/, "Company ID must be a six-digit number")
                .required("Company ID is required"),
            })}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-field-wrapper">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="myworkemail@work.com"
                    className={
                      errors.email && touched.email
                        ? "input-error input"
                        : "input"
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-field-wrapper">
                  <label htmlFor="companyID" className="label">
                    Company ID
                  </label>
                  <Field
                    name="companyID"
                    type="companyID"
                    autoComplete="off"
                    placeholder="123456"
                    className={
                      errors.companyID && touched.companyID
                        ? "input-error input"
                        : "input"
                    }
                  />
                  <ErrorMessage
                    name="companyID"
                    component="div"
                    className="error-message"
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
