export default function Validation(values) {
  let errors = {};

  if (!values.company_id) {
    errors.company_id = "Id is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  return errors;
}
