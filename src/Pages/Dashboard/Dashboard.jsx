import { useState, useEffect } from "react";
import UserIcon from "./components/DashboardOverview/UserIcon";

// component
import "../Dashboard/Dashboard.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";

export default function Dashboard() {
  const [loanData, setLoanData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [numApproved, setNumApproved] = useState(0);
  const [numPending, setNumPending] = useState(0);
  const [numRejected, setNumRejected] = useState(0);
  const [numNewApplications, setNumNewApplications] = useState(0);
  const [newApprovedDiff, setNewApprovedDiff] = useState(0);
  const [newPendingDiff, setNewPendingDiff] = useState(0);
  const [newRejectedDiff, setNewRejectedDiff] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      // Simulated data for demonstration purposes

      const data = [
        {
          id: "ID-24156351",
          applicantName: "John Doe",
          date: "2023-06-01",
          status: "Approved",
          creditScore: 750,
          loanAmount: "N 10000",
        },
        {
          id: "ID-24156352",
          applicantName: "Jane Smith",
          date: "2023-06-02",
          status: "Rejected",
          creditScore: 250,
          loanAmount: "N 15000",
        },
        {
          id: "ID-24156353",
          applicantName: "Michael Johnson",
          date: "2023-06-03",
          status: "Approved",
          creditScore: 720,
          loanAmount: "N 20000",
        },
        {
          id: "ID-24156354",
          applicantName: "Emily Williams",
          date: "2023-06-04",
          status: "Pending",
          creditScore: 800,
          loanAmount: "N 12000",
        },
        {
          id: "ID-24156355",
          applicantName: "David Brown",
          date: "2023-06-05",
          status: "Approved",
          creditScore: 670,
          loanAmount: "N 18000",
        },
      ];
      setLoanData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sortLoanData = () => {
      const sorted = [...loanData].sort((a, b) => {
        if (sortBy === "date") {
          return new Date(a.date) - new Date(b.date);
        } else if (sortBy === "status") {
          return a.status.localeCompare(b.status);
        } else if (sortBy === "creditScore") {
          return a.creditScore - b.creditScore;
        }
      });
      setSortedData(sorted);
    };

    sortLoanData();
  }, [loanData, sortBy]);

  useEffect(() => {
    const calculateLoanCounts = () => {
      const approvedCount = loanData.filter(
        (loan) => loan.status.toLowerCase() === "approved"
      ).length;
      const pendingCount = loanData.filter(
        (loan) => loan.status.toLowerCase() === "pending"
      ).length;
      const rejectedCount = loanData.filter(
        (loan) => loan.status.toLowerCase() === "rejected"
      ).length;
  
      setNumApproved(approvedCount);
      setNumPending(pendingCount);
      setNumRejected(rejectedCount);
  
      // Calculate the differences from yesterday based on the previous values
      setNewApprovedDiff(approvedCount - numApproved);
      setNewPendingDiff(pendingCount - numPending);
      setNewRejectedDiff(rejectedCount - numRejected);
    };
  
    calculateLoanCounts();
  }, [loanData, numApproved, numPending, numRejected]);

  useEffect(() => {
    const calculateNewApplications = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const newApplications = loanData.filter((loan) => {
        const loanDate = new Date(loan.date);
        return loanDate >= today;
      });

      setNumNewApplications(newApplications.length);
    };

    calculateNewApplications();
  }, [loanData]);

  const getSortOptionText = () => {
    let sortOptionText = "";
    if (sortBy === "date") {
      sortOptionText = "Date";
    } else if (sortBy === "status") {
      sortOptionText = "Status";
    } else if (sortBy === "creditScore") {
      sortOptionText = "Credit Score";
    }
    return sortOptionText;
  };

  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="dashboard-text">
            <p className="dashboard-title">Dashboard</p>
            <h3 className="welcome-back">
              Welcome back, you have <strong>{numNewApplications}</strong> new
              applications
            </h3>
          </div>
        </div>
        <div className="dashboard-button-wrapper">
          <button className="grey-dashboard-button">Existing</button>
          <button className="orange-dashboard-button">New</button>
        </div>

        <DashboardOverview
          numApproved={numApproved}
          numPending={numPending}
          numRejected={numRejected}
          newApprovedDiff={newApprovedDiff}
          newPendingDiff={newPendingDiff}
          newRejectedDiff={newRejectedDiff}
        />
        <table className="loan-table">
          <thead>
            <tr>
              <th colspan="5">
                <div className="section-header">
                  <h3>Recent Applications</h3>
                  <p>Sorted by {getSortOptionText()}</p>
                </div>
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th onClick={() => setSortBy("date")}>Date</th>
              <th onClick={() => setSortBy("status")}>Status</th>
              <th onClick={() => setSortBy("creditScore")}>Credit Score</th>
              <th>Loan Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((loan) => (
              <tr key={loan.id}>
                <td>
                  <div className="applicant">
                    <UserIcon />

                    <div>
                      <span className="applicant-name">
                        {loan.applicantName}
                      </span>
                      <br />
                      <span className="applicant-id">{loan.id}</span>
                    </div>
                  </div>
                </td>

                <td>
                  {new Date(loan.date).toLocaleDateString("en-US", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td>{loan.status}</td>
                <td>{loan.creditScore}</td>
                <td>{loan.loanAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
