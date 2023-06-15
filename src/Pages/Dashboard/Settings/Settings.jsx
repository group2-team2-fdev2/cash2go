import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";

export default function Settings() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <BreadCrumbs />
      </div>
    </>
  );
}
