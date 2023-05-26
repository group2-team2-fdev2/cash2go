import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const VALIDATION = {
  
  email: [
    {
      isValid: (value) => !!value,
      message: "email is required",
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: "Invalid email address",
    },
   
  ],
}

const getErrorFields = (form, submitted) => {
  const key = "email"; 

  if (!VALIDATION[key]) return {}; // Return an empty object if the field key is not found in VALIDATION

  

  const emailErrorField = VALIDATION[key]
    .map((validation) => ({
      isValid: validation.isValid(form[key]),
      message: validation.message,
    }))
    .filter((emailErrorField) => !emailErrorField.isValid);

  if (form[key] === "" && ( submitted )) {
    emailErrorField.push({ message: "Email is required" });
  }

  return { [key]: emailErrorField };
};


const EmailRequest = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState("");

  const navigate = useNavigate();
  const handleClick = (email) => {
    navigate("/securityquestion");
  };

  const errorFields = getErrorFields(form, submitted);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Simulating a server request with a delay
    try {
      setError("");

      // Check if the email corresponds to an existing account
      const isEmailValid = await checkIfEmailExists(email);
      if (!isEmailValid) {
        setError("Email does not exist.");
        return;
      }

      //  API call to handle the forgot password functionality
      //  Simulate a success response after 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      
      setEmail("");
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }

    setSubmitted(true);
  };


  const checkIfEmailExists = async (email) => {
    // Simulated API call to check if the email exists
    
    return await new Promise((resolve) =>
      setTimeout(() => resolve(true), 1000)
    );
  };

 

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          placeholder="myworkemail@work.com"
          onChange={handleEmailChange}
        />
        <p>Please provide the e-mail used for registration</p>
        <button type="submit" onclick={handleClick}>
          Next &rarr;
        </button>
      </form>
      <a href="#">Term of use</a>
      <a href="#">Privacy Policy</a>
    </div>
  );
};

export default EmailRequest;
