// library
import PropTypes from "prop-types";

export default function ApplicantBio({ contacts }) {
  const {
    DOB,
    address,
    adressOfEmployer,
    gender,
    nextOfKinPhoneNumber,
    phoneNumber,
    stateOfOrigin,
  } = contacts;
  return (
    <section className="ApplicantBio-wrapper">
      <header className="ApplicantBio-heading">
        <div className="ApplicantBio-title">Contact Info</div>
      </header>
      <main className="ApplicantBio-dataWrapper">
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">Gender</p>
          <p className="ApplicantBio-datum">{gender}</p>
        </div>
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">D.O.B</p>
          <p className="ApplicantBio-datum">{DOB}</p>
        </div>
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">Contact Address</p>
          <p className="ApplicantBio-datum">{address}</p>
        </div>
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">Address of Employer</p>
          <p className="ApplicantBio-datum">{adressOfEmployer}</p>
        </div>
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">State of Origin</p>
          <p className="ApplicantBio-datum">{stateOfOrigin}</p>
        </div>
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">Phone Number</p>
          <p className="ApplicantBio-datum">{`0${phoneNumber}`}</p>
        </div>
        <div className="ApplicantBio-datumWrapper">
          <p className="ApplicantBio-datumLabel">Next of Kin Phone Number</p>
          <p className="ApplicantBio-datum">{`0${nextOfKinPhoneNumber}`}</p>
        </div>
      </main>
    </section>
  );
}

ApplicantBio.propTypes = {
  contacts: PropTypes.shape({
    DOB: PropTypes.string,
    address: PropTypes.string,
    adressOfEmployer: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.string,
    lastName: PropTypes.string,
    nextOfKinPhoneNumber: PropTypes.number,
    phoneNumber: PropTypes.number,
    stateOfOrigin: PropTypes.string,
    _id: PropTypes.string,
  }),
};
