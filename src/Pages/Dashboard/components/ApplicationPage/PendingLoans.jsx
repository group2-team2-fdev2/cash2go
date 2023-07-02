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
 
  const itemsPerPage = 7;

  // Calculate the starting and ending index of the items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applicants.slice(indexOfFirstItem, indexOfLastItem);
  const noOfPages = Math.round(applicants.length / itemsPerPage);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPage);



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
            currentItems.map((applicant) => {
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
              <button
              className="application-footer-button"
               onClick={() => paginate(currentPage - 1)}
               disabled={currentPage === 1}>
                <div className="Application-pre">
                  <span><PreviousArrow /></span>
                  <span>Prev</span>
                </div>
              </button>
            </div>
            
              <div className="Application-page-no">
                
                <div>
                {[...Array(noOfPages)].map((_, index) => (
                  <a
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={
                      currentPage === index + 1
                        ? "Application-footer-pageList active"
                        : "Application-footer-pageList"
                    }
                  >
                    <div className="Application-footer-pageList">
                      {index + 1}
                    </div>
                  </a>
                ))}
              </div>
            </div> 
            <div>
            <button
            className="application-footer-button"
              disabled={indexOfLastItem >= applicants.length}
              onClick={() => paginate(currentPage + 1)}
            >
              <div className="Application-next">
                 <span>Next</span>
                 <span> {<NextArrow />}</span>
              </div>
              
            </button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default PendingLoans;
