import { Data } from "./Data";
import { useEffect, useState } from "react";
import Downarrow from "./Downarrow";
import Download from "./Download";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import Pending from "./Pending";
import AllApplicationLoan from "./AllApplicationLoan";

function PendingLoans({filter, setFilter}) {
    // return(
    // <div>
    //   <div>
    //      <AllApplicationLoan/>
    //   </div>
    // </div>
    // )
    
  const [applicants, setApplicants] = useState(Data);

  useEffect(() => {
    fetch(`https://cash2go-backendd.onrender.com/api/v1/applicant/pending-applicants`)
    .then((resp) => resp.json())
      .then((data) => {
      console.log(data.data.pendingApplicants)
        setApplicants(data.data.pendingApplicants)
       })
     .catch((err)=> {
      console.log(err.message)
      })
   }, []);

  return (
    <div>
      <table className="Application-table">
        <thead >
          <tr>
            <th colSpan="6" id="Application-allApp-container">All Applications</th>
          </tr>
          <tr className="Application-second-tableHead">
            <th  id='Application-table-applicantinfo'>Applicants info</th>
            <th>
                <p className="Application-date-header">Date  &darr;</p>
            </th>
            <th>
                <p className="Application-status-header">Status  &darr;</p>
            </th>
            <th>
                <p className="Application-creditscore-header">Credit Score  &darr;</p>
            </th>
            <th colSpan='2'>
                <p className="Application-amount-header">Amount  &darr;</p>
            </th>
          </tr>
        </thead>

        <tbody>
        {applicants && applicants.map((applicant) => {
            return (
              <tr>
                <div>
                <div>
                  <td>{applicant.contact.firstName}</td>
                  <td>{applicant.contact.lastName}</td>
                </div>
                </div>
                <td>{applicant.prediction.lastLoanApplication}</td>
                <td>{applicant.prediction.isPending ? "Pending" : applicant.prediction.isRejected ? "Rejected" : "Approved"}</td>
                <td>{applicant.prediction.creditScore}</td>
                <td>{applicant.prediction.loanRequestAmount}</td>
              </tr>
            )
           })} 
          <tr className="Application-footer">
            <div>
              <div className="Application-pre">
                <PreviousArrow />
                <p>Pre</p>
              </div>
            </div>
            <div>
              <div className="Application-page-no">
                <p>1</p>
                <p>2</p>
                <p>...</p>
                <p>5</p>
                <p>6</p>
              </div>
            </div>
            <div>
              <div className="Application-next">
                <p>Next</p>
                <NextArrow />
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PendingLoans;