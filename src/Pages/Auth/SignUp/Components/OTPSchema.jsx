// library
import * as Yup from "yup";

const OTPSchema = Yup.object().shape({
  otp: Yup.array()
    .of(Yup.string())
    .test({
      name: "validate-otp",
      message: "input the 4-digit PIN",
      test: (value) => {
        return value.join("").trim() !== "";
      },
    }),
});

export default OTPSchema;
