// library
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
// component
import LoginSchema from "./LoginValidation";
import PasswordField from "./PasswordField";
import ButtonVariant from "./ButtonVariant";
import ConfirmPasswordField from "./ConfirmPasswordField";

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
        <PasswordField />
        <ConfirmPasswordField />
        <ButtonVariant />
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
