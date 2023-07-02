import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function NewModelSettings() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <header>
        <p>New Model</p>
        <p>Add new models and set the rules for prediction</p>
      </header>

      <div>
        <Formik
          initialValues={{
            name: "",
            description: "",
            creator: "",
            variable: "",
            operator: "",
            value: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required(),
            description: Yup.string().required(),
            creator: Yup.string().required(),
            variable: Yup.string().required(),
            operator: Yup.string().required(),
            value: Yup.string().required(),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="">
                <label htmlFor="name" className="">
                  Model Name
                </label>
                <div className={errors.name && touched.name ? "" : ""}>
                  <Field
                    name="name"
                    type="text"
                    autoComplete="off"
                    className=""
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="description" className="">
                  Model Description
                </label>
                <div
                  className={
                    errors.description && touched.description ? "" : ""
                  }
                >
                  <Field
                    name="description"
                    type="text"
                    autoComplete="off"
                    className=""
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="creator" className="">
                  Model Creator
                </label>
                <div className={errors.creator && touched.creator ? "" : ""}>
                  <Field
                    name="creator"
                    type="text"
                    autoComplete="off"
                    className=""
                  />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Variable</td>
                    <td>Operator</td>
                    <td>Value</td>
                    <td>Delete</td>
                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>
                                      <div className="">
                  <label htmlFor="" className="">
                    Security Question
                  </label>
                  <Field
                    name="securityQuestion"
                    as="select"
                    className={
                      errors.securityQuestion && touched.securityQuestion
                        ? "Auth-input-error Auth-select"
                        : "Auth-select"
                    }
                  >
                    <option className="option">
                      Please select a security question
                    </option>
                    <option
                      value="Where did you meet your spouse"
                      className="Auth-option"
                    >
                      Where did you meet your spouse?
                    </option>
                    <option
                      value="What is the name of your favorite childhood friend"
                      className="Auth-option"
                    >
                      What is the name of your favorite childhood friend?
                    </option>
                    <option
                      value="In what city did you meet your spouse/significant other"
                      className="Auth-option"
                    >
                      In what city did you meet your spouse/significant other?
                    </option>
                    <option
                      value={`What is your mother's maiden name`}
                      className="Auth-option"
                    >
                      {`What is your mother's maiden name?`}
                    </option>
                    <option
                      value="What is the name of your first pet"
                      className="Auth-option"
                    >
                      What is the name of your first pet?
                    </option>
                  </Field>
                </div>
                                      </td>
                                  </tr>
                              </tbody>
              </table>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
