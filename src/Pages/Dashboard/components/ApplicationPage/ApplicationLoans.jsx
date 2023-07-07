import { useState } from "react";
import AllApplicationLoan from "./AllApplicationLoan";
import ApprovedLoans from "./ApprovedLoans";
import PendingLoans from "./PendingLoans";
import RejectedLoans from "./RejectedLoans";

export default function ApplicationLoans(){
  const [status, setStatus] = useState ("AllApplication")

  return (
    <>
    <div className="Application-list-application">
      <button onClick={() => setStatus('AllApplication')} className='Application-loanButton'>All Applications <hr className="applicationhr"/></button>
      <button onClick={() => setStatus('Approved')} className='Application-loanButton'>Approved <hr className="applicationhr"/></button> 
      <button onClick={() => setStatus('Pending')} className='Application-loanButton'>Pending <hr className="applicationhr"/></button>
      <button onClick={() => setStatus('Rejected')} className='Application-loanButton'>Rejected <hr className="applicationhr"/></button>
    </div>
    
    {status === "AllApplication" &&  <AllApplicationLoan/>}
    {status === "Approved" &&  <ApprovedLoans/> }
    {status === "Pending" &&  <PendingLoans />}
    {status === "Rejected" &&  <RejectedLoans/> }
    </>
  )
}