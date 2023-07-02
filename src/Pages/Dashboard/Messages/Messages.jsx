import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import "../Messages/Messages.css";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import New from "./New";
import Sent from "./Sent";

export default function Messages() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <div className="message-breadcrumbs">
          <DashboardHeader
            title="Messages"
            firstLink="/Messages"
            secondLink="/Create messages"
            firstButtonTitle="Mark"
            secondButtonTitle="Delete marked"
          />
        </div>

        <div className="Message-link">
          <NavLink to={"new"}>New</NavLink>
          <NavLink to={ "sent"}>Sent</NavLink>
        </div>
        <Routes>
          <Route index element={<Navigate to={"new"} />} />
          <Route path="new" element={<New />} />
          <Route path="sent" element={<Sent />} />
        </Routes>
      </div>
    </>
  );
}
