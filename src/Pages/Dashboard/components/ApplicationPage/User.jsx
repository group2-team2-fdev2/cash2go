import ApplicantImage from "./ApplicantImage";
import "../../Dashboard.css";

function User(prop) {
  return (
    <div className="Application-appInfo-container">
      <ApplicantImage />
      <div>
        <p className="Application-name">{prop.name}</p>
        <p className="Application-applicant-id"> ID-20239078</p>
      </div>
    </div>
  );
}

export default User;
