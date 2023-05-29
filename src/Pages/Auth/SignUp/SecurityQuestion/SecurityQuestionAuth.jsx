import React from 'react'
import { useState } from 'react';
import '../SecurityQuestion/SecurityQuestion.css';
import LeftLoginLayout from '../../LogIn/components/LeftLoginLayout';
import Legal from "../../LogIn/components/Legal"

export default function SecurityQuestion() {
  
  const [answer, setAnswer] = useState(""); 
  const [popUp, setPopUp] = useState(false);
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

    setPopUp(true);
  };

 


  return (
    <>
      <div className="securityauth-component">
        <>
          <LeftLoginLayout />
        </>
        <div className="form-wrapper">
          
          <div className="user_email-wrapper">
            <label htmlFor="question">Security Question</label>
          
            <select className= "questions" name= "question" id ="question">
    <option >Where did you meet your spouse? </option>
      <option >What is the name of your favorite childhood friend? </option>
      <option > In what city did you meet your spouse/significant other? </option>
      <option > What is your mother's maiden name? </option>
      <option > What is the name of your first pet? </option>
  </select>
          </div>



          
          <div className="user_email-wrapper">
            <label htmlFor="answer">Your answer</label>
            <input type="text" id="answer" value={answer} onChange={handleAnswer} />

            {error && (
              <p className="securityanswer-error">{error}</p>
            )}
          </div>


          <div className='form-action'>
          <button onClick={handleSubmit} className="reset-btn">
            <span className="btn-text">Sign up</span>
          </button>
          <div className="legal-wrapper">
            <Legal />
          </div>
          </div>

          {popUp && (
            <div className="overlay">
              <div className="popup">
                
                <h3 className="popup-title">Congratulations!!!</h3>
                <p>Your signup for our Cash2go app is now complete.  </p>
                <p className="user1">Get ready to unlock great financial possibilities and achieve your goals.</p>
                <button className="continue-btn">Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}