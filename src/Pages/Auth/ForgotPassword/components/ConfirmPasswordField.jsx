// library
import PropTypes from "prop-types";
import { Field, ErrorMessage, useFormikContext } from "formik";
// component
import PasswordIcon, { AltPasswordIcon } from "./PasswordIcon";

export default function ConfirmPasswordField({
  isAltVisible,
  setAltVisible,
}) {
  const formik = useFormikContext();
  const toggleAltPasswordVisibility = (event) => {
    event.stopPropagation();
    setAltVisible(!isAltVisible);
  };
  return (
    <div className="user_password-wrapper">
      <label htmlFor="confirmPassword">New Password</label>
      <div className="form-field">
        <span onClick={toggleAltPasswordVisibility}>
          {isAltVisible ? <PasswordIcon /> : <AltPasswordIcon />}
        </span>
        <Field
          type={isAltVisible ? "text" : "password"}
          name="confirmPassword"
          className={
            formik.touched.confirmPassword && formik.errors.confirmPassword ? "error" : ""
          }
        />
      </div>
      <ErrorMessage
        name="confirmPassword"
        component="div"
        className="error-message"
      />
    </div>
  );
}

ConfirmPasswordField.propTypes = {
  setAltVisible: PropTypes.func.isRequired,
  isAltVisible: PropTypes.bool.isRequired,
};
