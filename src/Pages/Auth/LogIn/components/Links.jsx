// library
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links-wrapper">
      <Link to="forgot-password" className="link">
        Forgot Password?
      </Link>
      <Link to="signup" className="link">
        Sign Up
      </Link>
    </div>
  );
}
