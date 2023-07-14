import { useEffect, useState } from "react";
// import Downarrow from "./Downarrow";
import Download from "./Download";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
import Pending from "./Pending";
import Rejected from "./Rejected";
import Approved from "./Approved";
import UserIcon from "../DashboardOverview/UserIcon";

function PendingLoans() {
  const [applicants, setApplicants] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [sortedData, setSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

 //Pagination
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = applicants.slice(firstIndex, lastIndex)
  const npage = Math.ceil(applicants.length/recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  useEffect(() => {
    fetch(`https://cash2go-backendd.onrender.com/api/v1/applicant/applicants`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.data.Applicants);
        const pending = data.data.Applicants.filter(applicant => applicant.prediction.isPending)
        setApplicants(pending);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  useEffect(() => {
    const sortLoanData = () => {
      const sorted = [...applicants].sort((a, b) => {
        if (sortBy === "date") {
          return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "status") {
          const statusOrder = {
            Pending: 1,
            Approved: 2,
            Rejected: 3,
          };
          const statusA = a.prediction.isPending
            ? "Pending"
            : a.prediction.isRejected
            ? "Rejected"
            : "Approved";
          const statusB = b.prediction.isPending
            ? "Pending"
            : b.prediction.isRejected
            ? "Rejected"
            : "Approved";
          return statusOrder[statusA] - statusOrder[statusB];
        } else if (sortBy === "creditScore") {
          return b.prediction.creditScore - a.prediction.creditScore;
        } else if (sortBy === "loanAmount") {
          return (
            parseInt(a.prediction.loanRequestAmount) -
            parseInt(b.prediction.loanRequestAmount)
          );
        }
      });
      setSortedData(sorted);
    };

    sortLoanData();
  }, [applicants, sortBy]);

  const getSortOptionText = () => {
    let sortOptionText = "";
    if (sortBy === "date") {
      sortOptionText = "Date";
    } else if (sortBy === "status") {
      sortOptionText = "Status";
    } else if (sortBy === "creditScore") {
      sortOptionText = "Credit Score";
    } else if (sortBy === "loanAmount") {
      sortOptionText = "Amount";
    }
    return sortOptionText;
  };

  function nextPage () {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  function prePage () {
    if(currentPage!== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage (id) {
    setCurrentPage(id)
  }

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
               onClick={() => handleSortBy("date")}>Date &darr;</h4>
            </th>
            <th>
              <h4 className="Application-status-header"
               onClick={() => handleSortBy("status")}>Status &darr;</h4>
            </th>
            <th>
              <h4 className="Application-creditscore-header"
               onClick={() => handleSortBy("creditScore")}>
                Credit Score &darr;
              </h4>
            </th>
            <th colSpan="2">
              <h4 className="Application-amount-header"
               onClick={() => handleSortBy("loanAmount")}>Amount &darr;</h4>
            </th>
          </tr>
        </thead>

        <tbody>
          {applicants &&
            records.map((applicant) => {
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
                    {/* <Download /> */}
                  </td>
                </tr>
              );
            })}

           <tr className="Application-footer">
           <ul className="Application-footer">
              <li className="Application-pre">
              <span><PreviousArrow /></span> <a href="#" className='page-link'
                onClick={prePage}> Prev</a>
              </li>
            
           <div className="Application-page-no">
            {
              numbers.map((n, i)=> (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} Key={i}>
                  <a href="#" 
                  onClick={()=>changeCurrentPage (n)}>{n}</a>
                </li>
              ))
            }
            </div>
         
            
            <li className="Application-next">
                <a href="#" className='page-link'
                onClick={nextPage}> Next</a> <span> {<NextArrow />}</span>
            </li>
          </ul>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PendingLoans;
