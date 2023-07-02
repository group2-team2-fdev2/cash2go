import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//library
import axios from "axios";

// component
import "../Dashboard/Dashboard.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";
import BreadCrumbs from "./components/BreadCrumbs";
import DashboardApplicantList from "./DashboardApplicantList";
// import Button from "./components/DashboardHeader/Button";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

// eslint-disable-next-line react/prop-types
export default function Dashboard() {
  const [loanData, setLoanData] = useState([]);
  const [numNewApplications, setNumNewApplications] = useState(0);
  const [numApproved, setNumApproved] = useState(0);
  const [numPending, setNumPending] = useState(0);
  const [numRejected, setNumRejected] = useState(0);
  const [newApprovedDiff, setNewApprovedDiff] = useState(0);
  const [newPendingDiff, setNewPendingDiff] = useState(0);
  const [newRejectedDiff, setNewRejectedDiff] = useState(0);
  const [firstName, setFirstName] = useState("");

  const isRegularButton = true;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  useEffect(() => {
    // Fetch user data and update the state with the user's first name
    const fetchUserData = async () => {
      try {
        const storedFirstName = localStorage.getItem("firstName");
        if (storedFirstName) {
          setFirstName(storedFirstName);
        } else {
          const response = await axios.get(
            `https://cash2go-backendd.onrender.com/api/v1/user/get-firstname?email=${email}`
          );
          const userData = response.data;
          const firstName = userData.data.firstName;
          setFirstName(firstName);
          localStorage.setItem("firstName", firstName);
        }
      } catch (error) {
        console.error("Error while fetching user data:", error);
      }
    };

    fetchUserData();
  }, [email]);

  useEffect(() => {
    const calculateLoanCounts = () => {
      const approvedCount = loanData.filter(
        (loan) => loan.status === "Approved"
      ).length;
      const pendingCount = loanData.filter(
        (loan) => loan.status === "Pending"
      ).length;
      const rejectedCount = loanData.filter(
        (loan) => loan.status === "Rejected"
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

      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const newApplications = loanData.filter((loan) => {
        const loanDate = new Date(loan.date);
        return loanDate >= yesterday && loanDate < today;
      });

      setNumNewApplications(newApplications.length);
    };

    calculateNewApplications();
  }, [loanData]);

  return (
    <div>
      <Navbar email={email}/>
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <div className="Dashboard-header">
          <div className="Dashboard-text">
            <div className="Dashboard-title"></div>
            <DashboardHeader
              title={`Hello, ${firstName || "User"}`}
              subTitle={
                <>
                  Welcome back you have
                  <span className="dashboardHeader-subTitle-variable">
                    {" "}
                    {numNewApplications}{" "}
                  </span>
                  new applications
                </>
              }
              firstLink="/applications"
              secondLink="/new-application"
              firstButtonTitle="Existing"
              secondButtonTitle="New"
              isRegularButton={isRegularButton}
            />
          </div>
        </div>

        <DashboardOverview
          numApproved={numApproved}
          numPending={numPending}
          numRejected={numRejected}
          newApprovedDiff={newApprovedDiff}
          newPendingDiff={newPendingDiff}
          newRejectedDiff={newRejectedDiff}
        />
        <DashboardApplicantList
          loanData={loanData}
          setLoanData={setLoanData}
          setNumNewApplications={setNumNewApplications}
          sectionTitle="Recent Applications"
          sortOptionText="Sort Option Text"
        
        />
      </div>
    </div>
  );
}
