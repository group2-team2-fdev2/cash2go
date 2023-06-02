import { useNavigate } from "react-router-dom";
import LeftLoginLayout from "../components/LeftLoginLayout";
import Legal from "../components/Legal";
import NewPasswordForm from "../components/NewPasswordForm";

export default function NewPassword() {
  const navigate = useNavigate;
  const submitForm = (values) => {
    console.log(values);
    navigate("/");
  };
  return (
    <div className="layout-component">
      <LeftLoginLayout />
      <div className="form-wrapper">
        <h3 className="reset title">Reset Password</h3>
        <NewPasswordForm submitForm={submitForm} />
        <Legal />
      </div>
    </div>
  );
}
