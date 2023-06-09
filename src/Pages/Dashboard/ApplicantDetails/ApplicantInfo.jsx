import { useLoaderData } from "react-router-dom";
import ApplicantBio from "../components/ApplicantBio/ApplicantBio";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import axios from "axios";

export default function ApplicantInfo() {

    const contacts = useLoaderData();

    const { firstName, lastName, _id } = contacts

  const isTrue = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title={`${firstName} ${lastName}`}
          subTitle={`ID ${_id}`}
          isTrue={isTrue}
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
    `https://cash2go-backendd.onrender.com/api/v1/applicant/search-applicant?firstName=Mubarak`
  );
  return response.data.data.contact;
};
