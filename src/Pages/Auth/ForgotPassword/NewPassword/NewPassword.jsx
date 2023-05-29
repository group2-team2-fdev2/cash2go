import { useNavigate } from "react-router-dom";
import LeftLoginLayout from "../components/LeftLoginLayout";
import Legal from "../components/Legal";
import LoginForm from "../components/LoginForm";

export default function NewPassword() {
  const navigate = useNavigate;
  const LoginToApp = (values) => {
    console.log(values);
    navigate("/");
  };
  return (
    <div className="layout-component">
      <LeftLoginLayout />
      <div className="form-wrapper">
        <h3 className="reset title">Reset Password</h3>
        <LoginForm submitForm={LoginToApp} />
        <Legal />
      </div>
    </div>
  );
}
