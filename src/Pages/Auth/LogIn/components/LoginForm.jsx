import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../LogIn.css";
import LoginSchema from "./LoginValidation";
import ArrowRight from "./ArrowRight";

export default function LoginForm({ submitForm }) {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    submitForm(values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="user_email-wrapper">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>

        <div className="user_password-wrapper">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>

        <button type="submit" className="button-wrapper">
          <span className="button-text">Log in</span>
          <ArrowRight />
        </button>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
