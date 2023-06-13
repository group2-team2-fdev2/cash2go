import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";

export default function Applications() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <BreadCrumbs />
              <DashboardHeader
                title="Ogbeni Mallam"
                subTitle="View All Loan application"
                firstLink="info"
                secondLink="applicant-review"
                firstButtonTitle="Info"
                secondButtonTitle="Review"
              />
      </div>
    </>
  );
}
