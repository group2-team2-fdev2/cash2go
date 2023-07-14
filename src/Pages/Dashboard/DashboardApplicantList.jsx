import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import UserIcon from "./components/DashboardOverview/UserIcon";
// import ApplicantOverview from "./ApplicantDetails/ApplicantOverview";
//components
import Approved from "./components/DashboardOverview/Approved";
import Rejected from "./components/DashboardOverview/Rejected";
import Pending from "./components/DashboardOverview/Pending";


// eslint-disable-next-line react/prop-types
export default function DashboardApplicantList({
  // eslint-disable-next-line react/prop-types
  sectionTitle,
  // eslint-disable-next-line react/prop-types
  sortOptionText,
  // eslint-disable-next-line react/prop-types
  searchQuery,
  // eslint-disable-next-line react/prop-types
  loanData,
  // eslint-disable-next-line react/prop-types
  setLoanData,
}) {
  // const [loanData, setLoanData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  // const [applicantOverview, setApplicationOverview] = useState(false);

  const navigate = useNavigate();

  const handleSelectApplicant = (selectedApplicantId) => {
    const selectedApplicant = loanData.find(
      (applicant) => applicant._id === selectedApplicantId
    );
    navigate("applicant-overview", { state: { selectedApplicant } });
  };


  const statusComponents = {
    Approved: <Approved />,
    Rejected: <Rejected />,
    Pending: <Pending />,
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch(
          "https://cash2go-backendd.onrender.com/api/v1/applicant/applicants"
        );
        const data = await response.json();

        if (response.ok && data.status === "Success") {
          setLoanData(data.data.Applicants);
          console.log("Fetched applicants:", data.data.Applicants);
        } else {
          console.error("Failed to fetch applicants data.");
        }
      } catch (error) {
        console.error("Error while fetching applicants:", error);
      }
    };

    fetchApplicants();
  }, [setLoanData]);

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  useEffect(() => {
    const sortLoanData = () => {
      const sorted = [...loanData].sort((a, b) => {
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
  }, [loanData, sortBy]);

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

  // eslint-disable-next-line react/prop-types
  const filteredData = loanData.filter((applicant) => {
    const fullName = `${applicant.contact.firstName} ${applicant.contact.lastName}`;
    // eslint-disable-next-line react/prop-types
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const displayData = searchQuery ? filteredData : sortedData;

  return (
    <table className="Dashboard-loan-table">
      <thead>
        <tr>
          <th colSpan="5">
            <div className="Dashboard-section-header">
              <h3 className="Dashboard-section-header-title">{sectionTitle}</h3>
              {sortOptionText && (
                <p className="Dashboard-sort-option">
                  Sorted by {getSortOptionText()}
                </p>
              )}
            </div>
          </th>
        </tr>
        <tr>
          <th className="Dashboard-name-header">Applicants Info</th>
          <th
            className="Dashboard-date-header"
            onClick={() => handleSortBy("date")}
          >
            Date &darr;
          </th>
          <th
            className="Dashboard-status-header"
            onClick={() => handleSortBy("status")}
          >
            Status &darr;
          </th>
          <th
            className="Dashboard-credit-score-header"
            onClick={() => handleSortBy("creditScore")}
          >
            Credit Score &darr;
          </th>
          <th
            className="Dashboard-loan-amount-header"
            onClick={() => handleSortBy("loanAmount")}
          >
            Amount &darr;
          </th>
        </tr>
      </thead>
      <tbody>
        {displayData.length === 0 && searchQuery && (
          <tr>
            <td colSpan="5" className="Dashboard-applicant-not-found-cell">
              <div className="Dashboard-applicant-not-found">
                Applicant not found
              </div>
            </td>
          </tr>
        )}
        {displayData.map((applicant) => (
          <tr key={applicant._id}>
            <td>
              <div className="Dashboard-applicant">
                <UserIcon />
                <div>
                  <span className="Dashboard-applicant-name">
                    {applicant.contact.firstName} {applicant.contact.lastName}
                  </span>
                  <br />
                  <span className="Dashboard-applicant-id">
                    {`ID - ${applicant.applicationID}`}
                  </span>
                </div>
              </div>
            </td>
            <td>
              {new Date(applicant.applicationDate).toLocaleDateString("en-US", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
            <td className="Dashboard-status-cell">
              {
                statusComponents[
                  applicant.prediction.isPending
                    ? "Pending"
                    : applicant.prediction.isRejected
                    ? "Rejected"
                    : "Approved"
                ]
              }
            </td>
            <td className="Dashboard-credit-score-cell">
              {applicant.prediction.creditScore}
            </td>
            <td>
              {Number(applicant.prediction.loanRequestAmount).toLocaleString()}
            </td>
   
          </tr>
        </thead>
        <tbody>
          {sortedData.map((applicant) => (
            <tr
              key={applicant._id}
              onClick={() => handleSelectApplicant(applicant._id)}
            >
              <td>
                <div className="Dashboard-applicant">
                  <UserIcon />
                  <div>
                    <span className="Dashboard-applicant-name">
                      {applicant.contact.firstName} {applicant.contact.lastName}
                    </span>
                    <br />
                    <span className="Dashboard-applicant-id">
                      {`ID - ${applicant.applicationID}`}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                {new Date(applicant.applicationDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )}
              </td>
              <td className="Dashboard-status-cell">
                {
                  statusComponents[
                    applicant.prediction.isPending
                      ? "Pending"
                      : applicant.prediction.isRejected
                      ? "Rejected"
                      : "Approved"
                  ]
                }
              </td>
              <td className="Dashboard-credit-score-cell">
                {applicant.prediction.creditScore}
              </td>
              <td>
                {Number(
                  applicant.prediction.loanRequestAmount
                ).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

DashboardApplicantList.propTypes = {
  sectionTitle: PropTypes.string,
  sortOptionText: PropTypes.string,
};
