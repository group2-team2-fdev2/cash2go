import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader"
import "../Messages/Messages.css";
import {Routes, Route, NavLink, Navigate} from "react-router-dom"
import Inbox from "./Inbox"
import New from "./New";


export default function Messages() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Message-content">
      <BreadCrumbs />
      <div className="message-breadcrumbs">
        <DashboardHeader 
        title="Messages"
        firstLink="/Messages" 
        secondLink="/Create messages"
        firstButtonTitle="mark"
        secondButtonTitle="Delete marked" 
        />
        </div>
        
        <div className="Message-link">
          <NavLink to={"inbox"}>Inbox</NavLink>
          <NavLink to={"new"} >New</NavLink>
          <NavLink to={"sent"}>Sent</NavLink>
          <NavLink to={"thread"}>Thread</NavLink>
          <NavLink to={"trash"}>Trash</NavLink>
        </div>
       <Routes>
        <Route index element={<Navigate to={"inbox"} />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="new" element={ <New />} /> 
       </Routes>

        
      </div>
    </>
  );
}
