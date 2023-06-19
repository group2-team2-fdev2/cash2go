import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import LineChart from "../components/LineChart/LineChart";
import PieChart from "../components/PieChart/PieChart";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import BarChart from "../components/BarChart/BarChart";

export default function Analytics() {
  const isOneButton = true;

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Approved",
        data: [50, 25, 75, 90, 25, 75],
        backgroundColor: "#169872",
        borderColor: "#169872",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Declined",
        data: [75, 25, 90, 75, 25, 50],
        backgroundColor: "#FF6F5A",
        borderColor: "#FF6F5A",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title="Analytics"
          subTitle="Loan Performance and Dashboard"
          link="/applications"
          oneButton={isOneButton}
          ButtonTitle="Applicants"
          paddingBottom="20px"
        />
        <LineChart
            title="Total Loans: Approved vs Declined"
            duration="Jan - Mar 2023"
            data={data}
          />
        <div className="chart-wrapper">
          <PieChart />
          <BarChart />
        </div>
      </div>
    </>
  );
}
