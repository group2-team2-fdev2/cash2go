import { useEffect, useState } from "react";
// import Downarrow from "./Downarrow";
import Download from "./Download";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import Pending from "./Pending";
import Rejected from "./Rejected";
import Approved from "./Approved";
import UserIcon from "../DashboardOverview/UserIcon";

function AllApplicationLoan() {
  const [applicants, setApplicants] = useState([]);
  const [sortBy, setSortBy] = useState("date");


  useEffect(() => {
    fetch(`https://cash2go-backendd.onrender.com/api/v1/applicant/applicants`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.data.Applicants);
        setApplicants(data.data.Applicants);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const getSortOptionText = () => {
    let sortOptionText = "";
    if (sortBy === "date") {
      sortOptionText = "Date";
    } else if (sortBy === "status") {
      sortOptionText = "Status";
    } else if (sortBy === "creditScore") {
      sortOptionText = "Credit Score";
    } else if (sortBy === "loanAmount") {
      sortOptionText = "Loan Amount";
    }
    return sortOptionText;
  };


  return (
    <div>
      <table className="Application-table">
        <thead>
          <tr>
            <th colSpan="6" id="Application-allApp-container">
              <h3>All Applications</h3>
            </th>
          </tr>

          <tr className="Application-second-tableHead">
            <th id="Application-table-applicantinfo">Applicants info</th>
            <th>
              <h4 className="Application-date-header"
               onClick={() => setSortBy("date")}>Date &darr;</h4>
            </th>
            <th>
              <h4 className="Application-status-header"
               onClick={() => setSortBy("status")}>Status &darr;</h4>
            </th>
            <th>
              <h4 className="Application-creditscore-header"
               onClick={() => setSortBy("creditScore")}>
                Credit Score &darr;
              </h4>
            </th>
            <th colSpan="2">
              <h4 className="Application-amount-header"
               onClick={() => setSortBy("loanAmount")}>Amount &darr;</h4>
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
                         <b>{applicant.contact.firstName} {applicant.contact.lastName}</b> 
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
export default AllApplicationLoan;
