// component
import "../Dashboard/Dashboard.css";
import Heading from "./components/Application/Heading";
import Table2 from "./components/Application/Table2";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
// import DashboardOverview from "./components/DashboardOverview/DashboardOverview";



export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <SideBar /> 
       <Heading/>
      {/* <div className="dashboard-content">
        <p className="test">THIS IS WHERE THE DASHBOARD CONTENT WILL GO</p>
        <DashboardOverview />
      </div> */}
      <Table2/> 
    </div>
  );
}
