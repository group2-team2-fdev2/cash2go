// import { useLoaderData } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import ApplicantBio from "../components/ApplicantBio/ApplicantBio";
import BreadCrumbs from "../components/BreadCrumbs";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
// import axios from "axios";
import { useSelector } from 'react-redux'

export default function ApplicantInfo() {

  // const location = useLocation();
  // console.log(location);

  // const contact = location.state || {};

  const selectedApplicant = useSelector((state) => state.applicant.selectedApplicant);

  console.log(selectedApplicant);

  const { contact, applicationID } = selectedApplicant;

  console.log(contact);

  const { firstName, lastName } = contact;

  const isNoButton = true;
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="Dashboard-content">
        <BreadCrumbs />
        <DashboardHeader
          title={`${firstName} ${lastName}`}
          subTitle={`ID ${applicationID}`}
          isNoButton={isNoButton}
          borderBottom="1px solid #D1D9E2"
          paddingBottom="20px"
          contact={contact}
        />
        {contact && <ApplicantBio contact={contact} />}
      </div>
    </>
  );
}

// loader function
// export const ApplicantBioLoader = async () => {
//   const response = await axios.get(
//     `https://cash2go-backendd.onrender.com/api/v1/applicant/applicants`
//   );
//   return response.data;
// };
