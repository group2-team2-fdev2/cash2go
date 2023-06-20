import { useState } from "react";
import AllApplicationLoan from "./AllApplicationLoan";
import ApprovedLoans from "./ApprovedLoans";
import PendingLoans from "./PendingLoans";
import RejectedLoans from "./RejectedLoans";

export default function ApplicationLoans(){
  const [status, setStatus] = useState ("AllApplication")

  return (
    <>
    <div className="Application-last-application">
      <button onClick={() => setStatus('AllApplication')} className='Application-loanButton'>All Applications</button>
      <button onClick={() => setStatus('Approved')} className='Application-loanButton'>Approved</button> 
      <button onClick={() => setStatus('Pending')} className='Application-loanButton'>Pending</button>
      <button onClick={() => setStatus('Rejected')} className='Application-loanButton'>Rejected</button>
    </div>
    
    {status === "AllApplication" &&  <AllApplicationLoan/>}
    {status === "Approved" &&  <ApprovedLoans/> }
    {status === "Pending" &&  <PendingLoans />}
    {status === "Rejected" &&  <RejectedLoans/> }
    </>
  )
}