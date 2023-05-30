// library
import { Field, ErrorMessage } from "formik";

export default function PasswordField() {
  return (
    <div className="user_password-wrapper">
      <label htmlFor="password">New Password</label>
      <Field type="password" id="password" name="password" />
      <ErrorMessage name="password" component="div" className="error-message" />
    </div>
  );
}
