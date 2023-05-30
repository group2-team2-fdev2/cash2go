// library
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number or symbol"
    )
    .required("Password is required"),
});

export default LoginSchema;
