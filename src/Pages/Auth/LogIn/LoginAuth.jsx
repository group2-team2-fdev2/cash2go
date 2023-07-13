// library
import { useNavigate } from "react-router-dom";
// style
import "../Auth.css";
// component
import LeftLoginLayout from "../components/LeftLoginLayout";
import LoginForm from "./LoginForm";
import Links from "../components/Links";
import Legal from "../components/Legal";

export default function LoginAuth() {
  const navigate = useNavigate(); // Navigation function

  // Handles the next step after OTP verification
  const loginToApp = (isAuthenticated, email) => {
    if (isAuthenticated) {
      // If user is authenticated, navigate to dashboard page
      navigate(`/dashboard?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <>
      <main className="Auth-layout-component">
        <LeftLoginLayout />
        <section className="Auth-form-wrapper">
          <header className="Auth-title">Log In</header>
          <LoginForm loginToApp={loginToApp} />
          <Links />
          <Legal />
        </section>
      </main>
    </>
  );
}
