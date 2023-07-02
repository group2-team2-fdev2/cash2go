import { useLoaderData } from "react-router-dom";
import ApplicantBio from "../components/ApplicantBio/ApplicantBio";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import axios from "axios";

export default function ApplicantInfo() {
  const contacts = useLoaderData();

  console.log(contacts)

  const { firstName, lastName, _id } = contacts;

  const isNoButton = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title={`${firstName} ${lastName}`}
          subTitle={`ID ${_id}`}
          isNoButton={isNoButton}
          borderBottom="1px solid #D1D9E2"
          paddingBottom="20px"
        />
        {contacts && <ApplicantBio contacts={contacts} />}
      </div>
    </>
  );
}

// loader function
export const ApplicantBioLoader = async () => {
  const response = await axios.get(
    `https://cash2go-backendd.onrender.com/api/v1/applicant/applicants`
  );
  return response.data;
};
