// library
import { Field, ErrorMessage, useFormikContext } from "formik";
import PropTypes from "prop-types";
// component
import PasswordIcon, { AltPasswordIcon } from "./PasswordIcon";

export default function PasswordField({ isVisible, handlePasswordIcon }) {
  const formik = useFormikContext();
  const togglePasswordVisibility = (event) => {
    event.stopPropagation();
    handlePasswordIcon(!isVisible);
  };

  return (
    <div className="user_password-wrapper">
      <label htmlFor="password">Password</label>
      <div className="form-field">
        <span onClick={togglePasswordVisibility}>
          {isVisible ? <PasswordIcon /> : <AltPasswordIcon />}
        </span>
        <Field type={isVisible ? "text" : "password"} name="password" className={(formik.touched.password && formik.errors.password ? "error" : "")} />
      </div>
      <ErrorMessage name="password" component="div" className="error-message" />
    </div>
  );
}

PasswordField.propTypes = {
  handlePasswordIcon: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
