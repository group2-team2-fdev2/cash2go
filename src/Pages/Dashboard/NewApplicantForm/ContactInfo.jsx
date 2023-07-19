import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    // applicationID: "",
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

  const handleNext = async (event) => {
    event.preventDefault();

    try {
      // data posting to the endpoint
      const response = await axios.post(
        "https://cash2go-backendd.onrender.com/api/v1/applicant/create-applicant-contact",
        formData
      );
      console.log("Form data posted successfully:", response.data);

      const { status, data } = response.data;
      if (status === "Success" && data && data.contact) {
        // Navigate to the next page with the form data as state
        navigate("/new-application/prediction-info", { state: formData });
      } else {
        console.error("API response does not have the expected structure.");
      }
    } catch (error) {
      console.error("Error posting form data:", error);
    }
  };

  return (
    <section className="NewApplicantForm-section">
      <header className="NewApplicantForm-header">Personal Information</header>
      <form className="NewApplicantForm-form" onSubmit={handleNext}>
        <main className="NewApplicantForm-main">
          <div>
            {/* <TextInput
              label="ID Number"
              name="applicationID"
              value={formData.applicationID}
              onChange={handleChange}
              required
            /> */}
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
            <SelectInput
              label="State of Origin"
              name="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={handleChange}
              options={data.stateOfOrigin}
              required
            />
          </div>
          <div>
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
