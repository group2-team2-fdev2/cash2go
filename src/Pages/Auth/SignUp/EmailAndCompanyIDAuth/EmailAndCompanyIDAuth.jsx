import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./EmailAndCompanyIDAuth.css";
import LeftSignUp from "../Components/LeftSignUp";
import { useState } from "react";
import Validation from "../Components/Validation";

export default function EmailAndCompanyIDAuth() {
  const[values, setValues] = useState({
    email: "",
    company_id:"",
  });

  const [errors, setErrors] = useState ({})

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.email] : event.target.value
    })
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="signup_container">
      <div className="Leftside">
        <LeftSignUp />
      </div>
      <div className="right">
        <div className="text-container">
        <h2 className="signup_heading">Sign Up</h2>
        <form className="signup_form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              defaultvalue={values.email}
              onChange={handleChange}
              id="email"
              placeholder="myworkemail@work.com"
              />
              {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="company_id">Company ID</label>
            <input
              type="text"
              name="company_id"
              defaultvalue={values.company_id}
              onChange={handleChange}
              id="company_id"
              placeholder="123ABC"
            />
            {errors.company_id && <p className="error">{errors.company_id}</p>}
          </div>
          <button className="form_btn">
            Next <AiOutlineArrowRight />
          </button>
        </form>
        <div className="attribution">
          <Link to="">Terms of use</Link>
          <Link to="">Privacy Policy</Link>
        </div>
      </div>
      </div>
    </div>
    
  );
}
