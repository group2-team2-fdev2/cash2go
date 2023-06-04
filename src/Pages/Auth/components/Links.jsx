// library
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links-wrapper">
      <Link to="email-request" className="link">
        Forgot Password?
      </Link>
      <Link to="email-and-companyID-auth" className="link">
        Sign Up
      </Link>
    </div>
  );
}
