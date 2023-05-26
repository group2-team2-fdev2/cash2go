import React, { useState } from 'react';

const SecurityQuestionPage = ({ email }) => {
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSecurityAnswerChange = (e) => {
    setSecurityAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or check the security answer against the stored answer in your database
    // If the answer is correct, you can proceed with the password reset process

    // let's assume the correct answer is "OpenAI"
    if (securityAnswer.toLowerCase() === 'openai') {
      
      setError('Incorrect security answer');
    }
  };

  return (
    <div>
      <h2 className='title'>Reset Password</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
      <label htmlFor="security-question">Security Question</label>
        <input
          id='security-question'
          type="text"
          placeholder='Where did you meet your spouse?'
          
        />
        <label htmlFor="security-answer">Your answer</label>
        <input
          type="text"
          value={securityAnswer}
          onChange={handleSecurityAnswerChange}
        />
        <button type="submit">Reset</button>
      </form>
      <p>Term of use</p>
      <p>Privacy Policy</p>
    </div>
  );
};

export default SecurityQuestionPage;
