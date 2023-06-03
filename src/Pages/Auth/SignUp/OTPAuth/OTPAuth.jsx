// library
import { useNavigate } from "react-router-dom";
// style
import "../SignUp.css";
// component
import LeftSignUpLayout2 from "../Components/LeftSignUpLayout2";
import OTPForm from "./OTPForm";
import Legal from "../Components/Legal";

export default function OTPAuth() {
  const navigate = useNavigate(); // Navigation function

  // Handles the next step after OTP verification
  const nextStep = async (isAuthenticated, email) => {
    if (isAuthenticated) {
      // If user is authenticated, navigate to security question authentication page
      navigate(`/security-question-auth?email=${email}`); 
    }
  };

  return (
    <>
      <main className="layout-component">
        <LeftSignUpLayout2 />
        <section className="form-wrapper">
          <OTPForm nextStep={nextStep} />
          <Legal />
        </section>
      </main>
    </>
  );
}
