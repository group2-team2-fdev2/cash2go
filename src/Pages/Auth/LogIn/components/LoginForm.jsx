// library
import { useState } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
// component
import LoginSchema from "./LoginSchema";
import Button from "./Button";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

export default function LoginForm({ loginToApp }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/user/login",
        values
      );
      const isAuthenticated = response.data;
      if (isAuthenticated) {
        loginToApp(isAuthenticated);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setStatus("Invalid Email or Password. Please try again.");
        setTimeout(() => {
          setStatus("");
        }, "5000");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {status && <p className="status-message">{status}</p>}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <EmailField />
          <PasswordField
            isVisible={isVisible}
            handlePasswordIcon={setVisible}
          />
          <Button isSubmitting={isSubmitting} />
        </Form>
      </Formik>
    </>
  );
}

LoginForm.propTypes = {
  loginToApp: PropTypes.func.isRequired,
};
