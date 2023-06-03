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
  const navigate = useNavigate();

  const loginToApp = (isAuthenticated) => {
    if (isAuthenticated) {
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
