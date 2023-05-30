// library
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
// component
import LoginSchema from "./LoginValidation";
import Button from "./Button";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

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
        <EmailField />
        <PasswordField />
        <Button />
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
