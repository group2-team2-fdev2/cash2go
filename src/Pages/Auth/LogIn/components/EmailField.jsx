// library
import { Field, ErrorMessage, useFormikContext } from "formik";

export default function EmailField() {
  const formik = useFormikContext();
  return (
    <div className="user_email-wrapper">
      <label htmlFor="email">Email</label>
      <Field
        type="email"
        name="email"
        placeholder="myworkemail@work.com"
        className={(formik.touched.password && formik.errors.password ? "error" : "")}
      />
      <ErrorMessage name="email" component="div" className="error-message" />
    </div>
  );
}
