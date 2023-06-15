// library
import PropTypes from "prop-types";
// component
import StepChecked from "./StepChecked";
import StepCurrent from "./StepCurrent";

export default function Step4({ isCompleted }) {
  return (
    <div className="Auth-step-container">
      <div className="Auth-step">
        <StepChecked />
        <div>
          <h6 className="Auth-step-number">STEP 1</h6>
          <p className="Auth-step-instruction">Fill your work e-mail and number</p>
        </div>
      </div>
      <div className="Auth-step">
        <StepChecked />
        <div>
          <h6 className="Auth-step-number">STEP 2</h6>
          <p className="Auth-step-instruction">Fill in the OTP sent your e-mail</p>
        </div>
      </div>
      <div className="Auth-step">
        <StepChecked />
        <div>
          <h6 className="Auth-step-number">STEP 3</h6>
          <p className="Auth-step-instruction">Security question</p>
        </div>
      </div>
      <div className="Auth-step">
        {isCompleted ? <StepChecked /> : <StepCurrent />}
        <div>
          <h6 className="Auth-step-number">FINAL STEP</h6>
          <p className="Auth-step-instruction">Create your password</p>
        </div>
      </div>
    </div>
  );
}

Step4.propTypes = {
  isCompleted: PropTypes.bool,
};
