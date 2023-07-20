import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextInput, DateInput, NumberInput } from "./components/FormInput";
import SubmitButton from "./components/Button";
import data from "./data/data.json";

export default function PredictionInfo() {
  // const location = useLocation();
  // const contactInfo = location.state;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanRequestAmount: "",
    creditScore: "",
    creditUtilization: "",
    annualIncome: "",
    loanDuration: "",
    previousLoanPerfomance: "",
    lastLoanApplication: "",
    guarantorsCreditScore: "",
    // ...contactInfo,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    axios
      .patch(
        "https://cash2go-backendd.onrender.com/api/v1/applicant/create-new-prediction/64b1542245f1a59efa54305d",
        formData
      )
      .then((response) => {
        console.log("Form data updated successfully:", response.data);

        setSuccessMessage("Prediction made successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error updating form data:", error);

        setError(
          "An error occurred while updating the form data. Please try again later."
        );
      });
  };

  return (
    <section className="NewApplicantForm-section">
      <header className="NewApplicantForm-header">Personal Information</header>
      <form className="NewApplicantForm-form" onSubmit={handleSubmit}>
        <main className="NewApplicantForm-main">
          <div>
            <NumberInput
              label="Loan Amount"
              name="loanRequestAmount"
              value={formData.loanRequestAmount}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Credit Score"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Credit Utilization"
              name="creditUtilization"
              value={formData.creditUtilization}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Annual Income(NGN)"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              required
            />
            {/* <SelectInput
              label="Self Employed"
              name="selfEmployed"
              value={formData.selfEmployed}
              onChange={handleChange}
              options={data.selfEmployed}
              required
            />
            <SelectInput
              label="Married"
              name="married"
              value={formData.married}
              onChange={handleChange}
              options={data.married}
              required
            /> */}
            {/* <SelectInput
              label="Education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              options={data.education}
              required
            /> */}
          </div>
          <div>
            <TextInput
              label="Loan Duration"
              name="loanDuration"
              value={formData.loanDuration}
              onChange={handleChange}
              required
            />
            <TextInput
              label="previous Loan Perfomance"
              name="previousLoanPerfomance"
              value={formData.previousLoanPerfomance}
              onChange={handleChange}
              options={data.previousLoanPerfomance}
              required
            />
            <DateInput
              label="Last Loan Application"
              name="lastLoanApplication"
              value={formData.lastLoanApplication}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Guarantor's Credit Score"
              name="guarantorsCreditScore"
              value={formData.guarantorsCreditScore}
              onChange={handleChange}
              required
            />
          </div>
        </main>
        <SubmitButton name="Make Prediction" isSubmitting={false} />
        {error && <div className="NewApplicantForm-error-message">{error}</div>}
        {successMessage && (
          <div className="NewApplicantForm-success-message">
            {successMessage}
          </div>
        )}
      </form>
    </section>
  );
}
