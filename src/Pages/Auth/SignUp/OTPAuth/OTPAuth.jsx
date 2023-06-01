import React, { useState } from "react"
import {useNavigate } from "react-router-dom";
import "../OTPAuth/OTPAuth.css"
import LeftOtpLayout from "./Components/LeftOtpLayout";
import Legal from "../../LogIn/components/Legal";
import axios from 'axios'

export default function OTPAuth() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [verificationStatus, setVerificationStatus] = useState ('')

  const handleChange = (element, index) => {
      if (isNaN(element.value)) return false;

      setOtp([...otp.map((d, idx)=> (idx === index) ? element.value : d)])

      if(element.nextSibling){
        element.nextSibling.focus();
      }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const response = await axios.post ('https://cash2go-backendd.onrender.com/api/v1/user/send-otp', {otp});
    //   //handle validation response
    //   if (response.data.valid) {
    //     navigate ("/login")
    //   } else {
    //     setError('hjliytrdec');
    //   }
    // } catch (error) {
    //   setError('Invalid OTP, please try again .')
    // }

    try {
      const response = await axios.post('https://cash2go-backendd.onrender.com/api/v1/user/verify-otp', {otp});
      
      const data = response.data;

      if (data.isValid) {
        setVerificationStatus('OTP verification successsful!');
      } else {
        setVerificationStatus('Invalid OTP, please try again');
      }
      } catch (error) {
        console.error('Error:', error);
      };
  }

  return (
    <div>
      <div className="OTP-component">
        <div className="left-layout">
          <LeftOtpLayout />
        </div>
        <div className="otp-container">
          <div className="otp">
          <div className="input-container">
              {otp.map((data, index) =>{
                return(
                    <input 
                      className="otp-field"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      keybordType="numeric"
                      onChange={e => handleChange(e.target, index)}
                      onFocus={e  => e.target.select()}
                    />
                );
              })}
              <p>{verificationStatus}</p>
            </div>

                <p className="enter-otp"> Enter OTP</p>
                <p>Enter the four digits OTP sent to your mail </p>
                <div className="click-here">Click <p className="here">here</p> to resend OTP</div>
                <div className="button">
                  <button onClick={handleSubmit}>Submit</button>
                </div>

                <div className="tandc-container">
                  <Legal />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
 }
