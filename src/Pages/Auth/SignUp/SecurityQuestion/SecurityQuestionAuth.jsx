import { useState } from "react";
import "../SignUp.css";
import LeftLoginLayout3 from "../Components/LeftSignUpLayout3";
import Legal from "../../LogIn/components/Legal";
import ArrowRight from "../Components/ArrowRight";

export default function SecurityQuestion() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handleAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (answer === "") {
      setError("Please fill in the space");
      return;
    }

    if (answer.length == 0) {
      setError(true);
      return;
    }

    setError("");
  };

  return (
    <>
      <div className="layout-component">
        <LeftLoginLayout3 />
        <div className="form-wrapper">
          <div className="user_question-wrapper">
            <label htmlFor="question">Security Question</label>

            <select name="question" id="question">
              <option value=""> Where did you meet your spouse? </option>
              <option value="">
                What is the name of your favorite childhood friend?{" "}
              </option>
              <option value="">
                In what city did you meet your spouse/significant other?{" "}
              </option>
              <option value=""> What is your {`mother's`} maiden name? </option>
              <option value=""> What is the name of your first pet? </option>
            </select>
          </div>

          <div className="user_answer-wrapper">
            <label htmlFor="answer">Your answer</label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={handleAnswer}
            />
            {error && <p className="error-message">{error}</p>}
          </div>

          <button onClick={handleSubmit} className="button-wrapper">
            <span className="button-text">Sign up</span>
            <ArrowRight />
          </button>

          <Legal />
        </div>
      </div>
    </>
  );
}
