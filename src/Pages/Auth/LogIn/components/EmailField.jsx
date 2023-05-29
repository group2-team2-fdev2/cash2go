// library
import { Field, ErrorMessage } from "formik";

export default function EmailField() {
  return (
    <div className="user_email-wrapper">
      <label htmlFor="email">Email</label>
      <Field
        type="email"
        id="email"
        name="email"
        placeholder="myworkemail@work.com"
      />
      <ErrorMessage name="email" component="div" className="error-message" />
    </div>
  );
}
