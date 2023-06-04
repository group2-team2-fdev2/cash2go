// component
import StepChecked from "./StepChecked";
import StepCurrent from "./StepCurrent";
import StepUnchecked from "./StepUnchecked";

export default function Step2() {
  return (
    <div className="step-container">
      <div className="step">
        <StepChecked />
        <div>
          <h6 className="step-number">STEP 1</h6>
          <p className="step-instruction">Fill your work e-mail and number</p>
        </div>
      </div>
      <div className="step">
        <StepCurrent />
        <div>
          <h6 className="step-number">STEP 2</h6>
          <p className="step-instruction">Fill in the OTP sent your e-mail</p>
        </div>
      </div>
      <div className="step">
        <StepUnchecked />
        <div>
          <h6 className="step-number">STEP 3</h6>
          <p className="step-instruction">Security question</p>
        </div>
      </div>
      <div className="step">
        <StepUnchecked />
        <div>
          <h6 className="step-number">FINAL STEP</h6>
          <p className="step-instruction">Create your password</p>
        </div>
      </div>
    </div>
  );
}
