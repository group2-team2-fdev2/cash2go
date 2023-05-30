export default function Validation(values) {
  let errors = {};

  if (!values.company_id) {
    errors.company_id = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  return errors;
}
