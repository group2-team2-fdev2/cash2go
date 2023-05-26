import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../../styles/Auth/SignUp/Signup.css";

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup_container">
      <h2 className="signup_heading">Sign Up</h2>
      <form className="signup_form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="myworkemail@work.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="company_id">Company ID</label>
          <input
            type="text"
            name="company_id"
            id="company_id"
            placeholder="123ABC"
          />
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
  );
}
