// library
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// style
import "./LogIn.css";
// component
import LeftLoginLayout from "./components/LeftLoginLayout";
import ArrowRight from "./components/ArrowRight";
import Links from "./components/Links";
import Legal from "./components/Legal";

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
      <div className="login-component">
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
            <Links />
          </div>
          <div className="legal-wrapper">
            <Legal />
          </div>
        </div>
      </div>
    </>
  );
}
