import { useEffect, useState } from "react";
import Download from "./Download";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import Pending from "./Pending";
import Rejected from "./Rejected";
import Approved from "./Approved";
import UserIcon from "../DashboardOverview/UserIcon";

function RejectedLoans() {
  const [applicants, setApplicants] = useState ([]);
 
   useEffect(() => {
      fetch(`https://cash2go-backendd.onrender.com/api/v1/applicant/rejected-applicants`)
      .then((resp) => resp.json())
        .then((data) => {
        console.log(data.data.rejectedApplicants)
          setApplicants(data.data.rejectedApplicants)
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
            <th  colSpan="6" id="Application-allApp-container">All Applications</th>
          </tr>
          <tr  className="Application-second-tableHead">
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
            <th colSpan="2">
                <p className="Application-amount-header">Amount  &darr;</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {applicants &&
            applicants.map((applicant) => {
              return (
                <tr>
                  <td >
                    <div className="Application-appInfo-container">
                      <UserIcon />
                      <div >
                        <span className="Application-userName">
                          {applicant.contact.firstName} {applicant.contact.lastName}
                        </span>
                        <br/>
                        <span className="Dashboard-applicant-id">
                           {`ID - ${applicant.applicationID}`}
                         </span>
                         </div>
                    </div>
                  </td>
                  <td>{new Date (applicant.applicationDate).toLocaleDateString("en-US", {
                       year: "2-digit",
                       month: "2-digit",
                        day: "2-digit",
                    })}</td>
                  <td>
                    {applicant.prediction.isPending ? (
                      <Pending />
                    ) : applicant.prediction.isRejected ? (
                      <Rejected />
                    ) : (
                      <Approved />
                    )}
                  </td>
                  <td>{applicant.prediction.creditScore}</td>
                  <td>{applicant.prediction.loanRequestAmount}</td>
                  <td>
                    <Download />
                  </td>
                </tr>
              );
            })}

          <tr className="Application-footer">
            <div>
              <div className="Application-pre">
                <PreviousArrow />
                <p>Prev</p>
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
export default RejectedLoans;
