import React from 'react'
import { useState } from 'react';



const SecurityQuestions = () => {

  const [answer, setAnswer] = useState("")

//Error state
const [error, setError] = useState(false);


const handleSubmit = (event) => {
  event.preventDefault();
  if (answer.length == 0) {
  setError(true);
}
};


  return (

    <>
    <form  className = "form" onSubmit = {handleSubmit}>
    <div className="form-action">
    <label className="prompt"> Select a Security Question </label> 
  <select className= "questions" name= "question" id ="question">
    <option >Where did you meet your spouse? </option>
      <option >What is the name of your favorite childhood friend? </option>
      <option > In what city did you meet your spouse/significant other? </option>
      <option > What is your mother's maiden name? </option>
      <option > What is the name of your first pet? </option>
  </select>
  
  {error && answer.length <= 0 ? (
  <div className="form-action">
             <label className="prompt"> Your answer </label> 
                <input className = "answe-error" type = "text" required = "true" onChange={(event) => setAnswer (event.target.value)} ></input>
                  <small className = "error-text"> Please fill in your answer </small>
             </div>
  ) : (
    <div className="form-action">
    <label className="prompt"> Your answer </label> 
       <input className="answer" type = "text" required = "true"  onChange={(event) => setAnswer (event.target.value)}></input>
        <small  className = "hidden"> Please fill in your answer </small>
    </div>
  )
}
<div className='form-action'>
  <button> Sign up </button>
  </div>
  
    <div className='form-footer'>
    <a href ="/">Term of use</a>
    <a href ="/">Policy Privacy</a>
    </div>

    </form>
    </>
  )
}

export default SecurityQuestions


 


