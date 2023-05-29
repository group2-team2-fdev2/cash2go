// library
import { useNavigate } from "react-router-dom";
// style
import "./LogIn.css";
// component
import LeftLoginLayout from "./components/LeftLoginLayout";
import LoginForm from "./components/LoginForm";
import Links from "./components/Links";
import Legal from "./components/Legal";

export default function LogIn() {
  const navigate = useNavigate();

  const LoginToApp = (values) => {
    console.log(values);
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
          <LoginForm submitForm={LoginToApp} />
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
