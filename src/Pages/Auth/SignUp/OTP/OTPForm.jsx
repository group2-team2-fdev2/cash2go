// library
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
// component
import SubmitButton from "../../Components/SubmitButton";

export default function OTPForm({ nextStep }) {
  // State variables
  const [isSubmitting, setSubmitting] = useState(); // Tracks form submission state
  const [status, setStatus] = useState(); // Stores status message

  // Get email from URL query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  // Formik setup
  const formik = useFormik({
    initialValues: {
      otp: new Array(4).fill(""), // Initializes the `otp` field as an array with 4 empty strings
      email: email || "", // Initializes the `email` field with the value of the `email` variable if it exists, otherwise it initializes it as an empty string
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().min(1, "OTP is required")) // Specifies that each element in the `otp` array should be a string with a minimum length of 1
        .test(
          "isComplete",
          "OTP is required",
          (value) => value.join("").length === 4 // Custom test function to check if the joined OTP string has a length of 4
        ),
    }),
    onSubmit: async (values) => {
      const otp = values.otp.join(""); // Join the OTP array values into a single string
      // Check if the OTP length is equal to 4
      if (otp.length === 4) {
        submitForm(otp, values.email); // Call the submitForm function with the OTP and email values
      }
    },
  });

  // Handles OTP field change
  const handleOTPChange = (index, event) => {
    const { value } = event.target; // Extract the value from the event target

    // Validate the value to allow only digits
    if (/^\d*$/.test(value)) {
      const otp = [...formik.values.otp]; // Make a copy of the otp array from formik values
      otp[index] = value; // Update the OTP value at the specified index
      formik.setFieldValue("otp", otp); // Update the otp field value in formik
    }
  };

  // Handles form submission
  const submitForm = async (otp, email) => {
    setSubmitting(true); // Set form submission state to true

    try {
      // Send request to server to confirm OTP
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/verify-otp?email=${email}`,
        { otp: otp }
      );
      const isAuthenticated = response.data; // Get authentication status from response
      if (isAuthenticated) {
        // If user is authenticated, pass the nextStep function as a prop to the parent component
        nextStep(isAuthenticated, email);
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

  // Handles resend OTP request
  const handleResendOTP = async () => {
    const email = formik.values.email; // Get email value from form

    try {
      // Send request to server to resend OTP
      const response = await axios.patch(
        `https://cash2go-backendd.onrender.com/api/v1/user/resend-otp?email=${email}`
      );
      if (response.data) {
        // If user is authenticated, set status message from response
        setStatus("New OTP has been sent. Please check your email.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus(error.response.data.message); // Set error message from response
        setTimeout(() => {
          setStatus("");
        }, "5000"); // Clear status message after 5 seconds
      }
    }
  };

  return (
    <>
      {status && <p className="status-message">{status}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="otp-container">
          <div className="otp-wrapper">
            {formik.values.otp && // Checks if the `otp` field value exists
              formik.values.otp.map((digit, index) => {
                // Maps over each digit in the `otp` field
                return (
                  <input
                    key={index} // Assigns a unique key to each input element
                    type="text"
                    placeholder="0"
                    autoComplete="off"
                    maxLength="1" // Limits the input to a maximum length of 1 character
                    name={`otp[${index}]`} // Sets the name attribute for each input to "otp[index]"
                    value={digit} // Sets the value of each input to the corresponding digit value
                    onChange={(event) => handleOTPChange(index, event)} // Calls the `handleOTPChange` function when the input value changes
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.otp &&
                      formik.touched.otp &&
                      formik.errors.otp[index] &&
                      formik.touched.otp[index]
                        ? "input-error otp-field"
                        : "otp-field"
                    }
                  />
                );
              })}
            {/* Render the error message for the "otp" field if it has errors, has been touched, 
            and the form has been submitted at least once */}
            <div className="otp-error-message">
              {formik.errors.otp &&
                formik.touched.otp &&
                formik.submitCount > 0 && (
                  <p className="error-message">{formik.errors.otp}</p>
                )}
            </div>
          </div>
        </div>
        <div className="verification-instruction">
          <p className="sub-title"> Enter OTP</p>
          <p className="instruction">
            Enter the four digits OTP sent to your mail{" "}
          </p>
          <p className="instruction">
            Click{" "}
            <Link onClick={handleResendOTP} className="link">
              HERE
            </Link>{" "}
            to resend OTP
          </p>
        </div>
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </>
  );
}

OTPForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
};
