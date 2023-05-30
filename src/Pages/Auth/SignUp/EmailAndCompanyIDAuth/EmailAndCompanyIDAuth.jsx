// library
import { useState } from "react";
// style
import "../SignUp.css";
// component
import Validation from "../Components/Validation";
import LeftSignUpLayout from "../Components/LeftSignUpLayout1";
import Button from "../Components/Button";
import Legal from "../Components/Legal";

export default function EmailAndCompanyIDAuth() {
  const [values, setValues] = useState({
    email: "",
    company_id: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.email]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="layout-component">
      <LeftSignUpLayout />

      <div className="form-wrapper">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="user_email-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              // defaultvalue={values.email}
              onChange={handleChange}
              id="email"
              placeholder="myworkemail@work.com"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="user_companyID-wrapper">
            <label htmlFor="company_id">Company ID</label>
            <input
              type="text"
              name="company_id"
              // defaultvalue={values.company_id}
              onChange={handleChange}
              id="company_id"
              placeholder="123ABC"
            />
            {errors.company_id && (
              <p className="error-message">{errors.company_id}</p>
            )}
          </div>
          <Button />
        </form>
        <Legal />
      </div>
    </div>
  );
}
