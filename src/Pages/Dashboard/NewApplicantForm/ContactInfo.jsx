import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data/data.json";
import NextButton from "./components/Button";
import {
  TextInput,
  SelectInput,
  DateInput,
  NumberInput,
} from "./components/FormInput";

export default function ContactInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    applicationID: "",
    firstName: "",
    lastName: "",
    gender: "",
    DOB: "",
    stateOfOrigin: "",
    address: "",
    addressOfEmployer: "",
    phoneNumber: "",
    nextOfKinPhoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNext = (event) => {
    event.preventDefault();

    console.log(formData);
    navigate("/new-application/prediction-info", { state: formData });
  };

  return (
    <section className="NewApplicantForm-section">
      <header className="NewApplicantForm-header">Personal Information</header>
      <form className="NewApplicantForm-form" onSubmit={handleNext}>
        <main className="NewApplicantForm-main">
          <div>
            <TextInput
              label="ID Number"
              name="applicationID"
              value={formData.applicationID}
              onChange={handleChange}
              required
            />
            <TextInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <SelectInput
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={data.gender}
              required
            />
            <DateInput
              label="Date of Birth"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <SelectInput
              label="State of Origin"
              name="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={handleChange}
              options={data.stateOfOrigin}
              required
            />
            <TextInput
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Work Address"
              name="addressOfEmployer"
              value={formData.addressOfEmployer}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Next of Kin Phone Number"
              name="nextOfKinPhoneNumber"
              value={formData.nextOfKinPhoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </main>
        <NextButton name="Next" />
      </form>
    </section>
  );
}
