// component
import "../Dashboard/Dashboard.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <p className="test">THIS IS WHERE THE DASHBOARD CONTENT WILL GO</p>
        <DashboardOverview />
      </div>
    </div>
  );
}
