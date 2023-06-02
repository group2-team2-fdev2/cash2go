// library
import PropTypes from "prop-types";
import { Field, ErrorMessage, useFormikContext } from "formik";
// component
import PasswordIcon, { AltPasswordIcon } from "./PasswordIcon";

export default function PasswordField({ isVisible, setVisible }) {
  const formik = useFormikContext();
  const togglePasswordVisibility = (event) => {
    event.stopPropagation();
    setVisible(!isVisible);
  };
  return (
    <div className="user_password-wrapper">
      <label htmlFor="password">New Password</label>
      <div className="form-field">
        <span onClick={togglePasswordVisibility}>
          {isVisible ? <PasswordIcon /> : <AltPasswordIcon />}
        </span>
        <Field
          type={isVisible ? "text" : "password"}
          name="password"
          className={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
        />
      </div>
      <ErrorMessage name="password" component="div" className="error-message" />
    </div>
  );
}

PasswordField.propTypes = {
  setVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
