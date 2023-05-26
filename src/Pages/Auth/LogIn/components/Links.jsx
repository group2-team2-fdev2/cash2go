// library
import { Link } from "react-router-dom";
// style
import "../LogIn.css";

export default function Links() {
  return (
    <>
      <Link to="forgot-password" className="link">
        Forgot Password?
      </Link>
      <Link to="signup" className="link">
        Sign Up
      </Link>
    </>
  );
}
