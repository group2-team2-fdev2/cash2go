import React from 'react'
import Cash2goLogo from '../../../LogIn/components/Cash2goLogo'
import StepCheked from './StepCheked'
import StepList from './StepList'
import StepUnchecked from './StepUnchecked'
import StepCurrent from './StepCurrent'
import StepDetails from './StepDetails'
import "../OTPAuth.css"

const LeftOtpLayout = () => {
  return (
    <div>
        <div className='cash2go-container'>
            <div className="cash2go-image">
                <Cash2goLogo  />
            </div>
            <div>
                <div className='steps'>
                    <StepCheked />
                    <div className='step-details'>
                        <div className="step-list">
                            <StepList number = {"STEP 1"} />   
                        </div>
                        <StepDetails details = {"Fill your Work e-mail and Number"} />
                    </div>
                   
                </div>

                <div className='steps'>
                    <StepCurrent/>
                    <div className='step-details'>
                        <div className='step-list'>
                            <StepList number = {"STEP 2"} />
                        </div>
                        <StepDetails details = {"Fill in the OTP sent to yor mail"} />
                    </div>
                    
                </div>

                <div className='steps'>
                    <StepUnchecked/>
                    <div className='step-details'>
                        <div className='step-list'>
                            <StepList number = {"STEP 3"} />
                        </div>
                        <StepDetails details = {"Create your password"} />
                    </div> 
                </div>

                <div className='steps'>
                    <StepUnchecked />
                    <div className='step-details'>
                        <div className='step-list'>
                            <StepList number = {"STEP 4"} />
                        </div>
                        <StepDetails details = {"Security question"} />
                    </div>   
                </div>

                <div className='steps'>
                    <StepUnchecked/>
                    <div className='step-details'>
                        <div>
                            <StepList number = {"FINAL STEP"} />
                        </div>
                        <StepDetails details = {"Log into Cash2go"} />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftOtpLayout
