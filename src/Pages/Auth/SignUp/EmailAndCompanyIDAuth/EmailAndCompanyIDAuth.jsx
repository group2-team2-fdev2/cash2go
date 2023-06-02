// library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// style
import "../SignUp.css";
// component
import Validation from "../Components/Validation";
import LeftSignUpLayout from "../Components/LeftSignUpLayout1";
import Button from "../Components/Button";
import Legal from "../Components/Legal";

export default function EmailAndCompanyIDAuth() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    companyID: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.email === "" && values.companyID === "")
      setErrors(Validation(values));

    setSubmitting(true);
    try {
      const res = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/user/send-otp",
        values
      );
      const isAuthenticated = res.data;
      console.log(isAuthenticated);
      if (isAuthenticated) {
        navigate("/otp-auth");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus("Invalid Email or Company ID. Please try again.");
        setTimeout(() => {
          setStatus("");
        }, "5000");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="layout-component">
      <LeftSignUpLayout />

      <div className="form-wrapper">
        <h2 className="title">Sign Up</h2>
        {status && <p className="status-message">{status}</p>}
        <form onSubmit={handleSubmit}>
          <div className="user_email-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="myworkemail@work.com"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="user_companyID-wrapper">
            <label htmlFor="companyID">Company ID</label>
            <input
              type="text"
              name="companyID"
              value={values.companyID}
              onChange={handleChange}
              id="companyID"
              placeholder="123ABC"
            />
            {errors.companyID && (
              <p className="error-message">{errors.companyID}</p>
            )}
          </div>
          <Button isSubmitting={isSubmitting} />
        </form>
        <Legal />
      </div>
    </div>
  );
}
