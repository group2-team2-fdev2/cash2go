// libraries
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// styles
import "../../styles/Auth/LogIn.css";
// components
import LeftLoginLayout from "../../components/LeftLoginLayout";
import ArrowRight from "../../components/ArrowRight";

export default function LogIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${form.email} ${form.password}`);
    setForm({ email: "", password: "" });
    navigate("/dashboard");
  };
  return (
    <>
      <>
        <LeftLoginLayout />
      </>
      <div className="form-wrapper">
        <h3 className="title">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="user_email-wrapper">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="user_password-wrapper">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-wrapper">
            <span className="btn-text">Log in</span>
            <ArrowRight />
          </button>
        </form>
        <div className="links-wrapper">
          <Link to="forgot-password" className="link">
            Forgot Password?
          </Link>
          <Link to="sign-up" className="link">
            Sign Up
          </Link>
        </div>
        <div className="legal-wrapper">
          <Link className="legal">Term of use</Link>
          <Link className="legal">Privacy policy</Link>
        </div>
      </div>
    </>
  );
}
