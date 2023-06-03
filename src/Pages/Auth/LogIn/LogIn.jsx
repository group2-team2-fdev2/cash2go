// library
import { useNavigate } from "react-router-dom";
// style
import "./LogIn.css";
// component
import LeftLoginLayout from "./components/LeftLoginLayout";
import LoginForm from "./LoginForm";
import Links from "./components/Links";
import Legal from "./components/Legal";

export default function LogIn() {
  const navigate = useNavigate(); // Navigation function

  // Handles the next step after OTP verification
  const loginToApp = (isAuthenticated) => {
    if (isAuthenticated) {
      // If user is authenticated, navigate to dashboard page
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="layout-component">
        <LeftLoginLayout />
        <div className="form-wrapper">
          <h3 className="title">Log In</h3>
          <LoginForm loginToApp={loginToApp} />
          <Links />
          <Legal />
        </div>
      </div>
    </>
  );
}
