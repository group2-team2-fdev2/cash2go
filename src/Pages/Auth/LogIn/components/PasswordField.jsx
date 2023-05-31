// library
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
// component
import PasswordIcon, { AltPasswordIcon } from "./PasswordIcon";

export default function PasswordField({ isVisible, handlePasswordIcon }) {
  const togglePasswordVisibility = () => {
    handlePasswordIcon(!isVisible);
  };

  return (
    <div className="user_password-wrapper">
      <label htmlFor="password">Password</label>
      <div className="form-field">
        <div onClick={togglePasswordVisibility}>
          {isVisible ? <PasswordIcon /> : <AltPasswordIcon />}
        </div>
        <Field type={isVisible ? "text" : "password"} name="password" />
      </div>
      <ErrorMessage name="password" component="div" className="error-message" />
    </div>
  );
}

PasswordField.propTypes = {
  handlePasswordIcon: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
