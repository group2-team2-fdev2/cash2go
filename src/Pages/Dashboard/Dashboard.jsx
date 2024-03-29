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
import DashboardHeader from "./components/DashboardHeader";

// eslint-disable-next-line react/prop-types
export default function Dashboard() {
  const [loanData, setLoanData] = useState([]);
  const [numNewApplications, setNumNewApplications] = useState(0);
  const [numApproved, setNumApproved] = useState(0);
  const [numRejected, setNumRejected] = useState(0);
  const [newApprovedDiff, setNewApprovedDiff] = useState(0);
  const [newRejectedDiff, setNewRejectedDiff] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // const isRegularButton = true;
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
        (loan) => loan.prediction.isApproved
      ).length;
      const rejectedCount = loanData.filter(
        (loan) => loan.prediction.isRejected
      ).length;

      console.log("Loan Data before update:", loanData);

      setNumApproved(approvedCount);
      setNumRejected(rejectedCount);

      // Calculate the differences from yesterday based on the previous values
      setNewApprovedDiff(approvedCount - numApproved);
      setNewRejectedDiff(rejectedCount - numRejected);
    };

    calculateLoanCounts();
  }, [loanData, numApproved, numRejected]);

  useEffect(() => {
    const calculateNewApplications = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const newApplications = loanData.filter((loan) => {
        const loanDate = new Date(loan.applicationDate);
        return loanDate >= yesterday && loanDate < today;
      });

      setNumNewApplications(newApplications.length);
    };

    calculateNewApplications();
  }, [loanData]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
      <Navbar
        email={email}
        handleSearchInputChange={handleSearchInputChange}
        handleClearSearch={handleClearSearch}
        searchQuery={searchQuery}
      />

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
              isRegularButton={true}
            />
          </div>
        </div>

        <DashboardOverview
          numApproved={numApproved}
          numRejected={numRejected}
          newApprovedDiff={newApprovedDiff}
          newRejectedDiff={newRejectedDiff}
        />
        <DashboardApplicantList
          loanData={loanData}
          setLoanData={setLoanData}
          setNumNewApplications={setNumNewApplications}
          sectionTitle="Recent Applications"
          sortOptionText="Sort Option Text"
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}
