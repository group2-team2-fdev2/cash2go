// library
import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
// component
import NewPasswordSchema from "./NewPasswordSchema";
import PasswordField from "./PasswordField";
import ConfirmPasswordField from "./ConfirmPasswordField";
import ButtonVariant from "./ButtonVariant";

export default function NewPasswordForm({ submitForm }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isAltVisible, setAltVisible] = useState(false);
  const [status, setStatus] = useState("");
  
  const handleSubmit = (values) => {
    setSubmitting(true);
    alert(JSON.stringify(values, null, 2));
    submitForm(values);
    if (!values) {
      setStatus("Please try again");
    }
    setSubmitting(false);
  };

  return (
    <>
      {status && <p className="status-message">{status}</p>}
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={NewPasswordSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <PasswordField isVisible={isVisible} setVisible={setVisible} />
          <ConfirmPasswordField
            isAltVisible={isAltVisible}
            setAltVisible={setAltVisible}
          />
          <ButtonVariant isSubmitting={isSubmitting} />
        </Form>
      </Formik>
    </>
  );
}

NewPasswordForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
