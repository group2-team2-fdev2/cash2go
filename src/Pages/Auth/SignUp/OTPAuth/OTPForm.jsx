// library
import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// component
import OTPSchema from "../Components/OTPSchema";
import Button1 from "../Components/Button1";
import axios from "axios";

export default function OTPForm({ nextStep }) {
  const [status, setStatus] = useState();
  const formik = useFormik({
    initialValues: {
      otp: new Array(4).fill(""),
    },
    OTPSchema,
    onSubmit: async (values) => {
      const enteredOTP = values.otp.join("");
      if (enteredOTP.length === 4) {
        alert(JSON.stringify({ otp: enteredOTP }, null, 2));
        submitForm(enteredOTP);
      }
    },
  });

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      const otp = [...formik.values.otp];
      otp[index] = value;
      formik.setFieldValue("otp", otp);
    }
  };

  const submitForm = async (enteredOTP) => {
    try {
      const response = await axios.patch(
        "https://cash2go-backendd.onrender.com/api/v1/user/verify-otp",
        { otp: enteredOTP }
      );
      const isAuthenticated = response.data;
      if (isAuthenticated) {
        nextStep(isAuthenticated);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus("Invalid OTP. Please try again.");
        setTimeout(() => {
          setStatus("");
        }, "5000");
      }
    }
  };

  return (
    <>
      {status && <p className="status-message">{status}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="otp-container">
          <div className="otp-wrapper">
            {formik.values.otp.map((digit, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  autoComplete="off"
                  maxLength="1"
                  name={`otp[${index}]`}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e)}
                  onBlur={formik.handleBlur}
                  className={
                    formik.errors.otp && formik.touched.otp
                      ? "error"
                      : "otp-field"
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="verification-instruction">
          <p className="sub-title"> Enter OTP</p>
          <p className="instruction">
            Enter the four digits OTP sent to your mail{" "}
          </p>
          <p className="instruction">
            Click <Link className="link">HERE</Link> to resend OTP
          </p>
        </div>
        <Button1 />
      </form>
    </>
  );
}

OTPForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  // isVisible: PropTypes.bool.isRequired,
};
