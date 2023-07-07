// component
import StepCurrent from "./StepCurrent";
import StepUnchecked from "./StepUnchecked";

export default function Step1() {
  return (
    <div className="Auth-step-container">
      <div className="Auth-step">
        <StepCurrent />
        <div>
          <h6 className="Auth-step-number">STEP 1</h6>
          <p className="Auth-step-instruction">Fill your work e-mail and number</p>
        </div>
      </div>
      <div className="Auth-step">
        <StepUnchecked />
        <div>
          <h6 className="Auth-step-number">STEP 2</h6>
          <p className="Auth-step-instruction">Fill in the OTP sent your e-mail</p>
        </div>
      </div>
      <div className="Auth-step">
        <StepUnchecked />
        <div>
          <h6 className="Auth-step-number">STEP 3</h6>
          <p className="Auth-step-instruction">Security question</p>
        </div>
      </div>
      <div className="Auth-step">
        <StepUnchecked />
        <div>
          <h6 className="Auth-step-number">FINAL STEP</h6>
          <p className="Auth-step-instruction">Create your password</p>
        </div>
      </div>
    </div>
  );
}
