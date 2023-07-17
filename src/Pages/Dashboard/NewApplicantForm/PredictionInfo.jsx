import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextInput, SelectInput, NumberInput } from "./components/FormInput";
import SubmitButton from "./components/Button";
import data from "./data/data.json";

export default function PredictionInfo() {
  const location = useLocation();
  const contactInfo = location.state;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    BVN: "",
    dependant: "",
    selfEmployed: "",
    married: "",
    education: "",
    loanAmount: "",
    loanDuration: "",
    applicantIncome: "",
    coApplicantIncome: "",
    previousLoanPerfomance: "",
    ...contactInfo,
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

    setFormData({
      BVN: "",
      dependant: "",
      selfEmployed: "",
      married: "",
      education: "",
      loanAmount: "",
      loanDuration: "",
      applicantIncome: "",
      coApplicantIncome: "",
      previousLoanPerfomance: "",
      ...contactInfo,
    });

    navigate("/dashboard");
  };

  return (
    <section className="NewApplicantForm-section">
      <header className="NewApplicantForm-header">Personal Information</header>
      <form className="NewApplicantForm-form" onSubmit={handleSubmit}>
        <main className="NewApplicantForm-main">
          <div>
            <NumberInput
              label="BVN"
              name="BVN"
              value={formData.BVN}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Dependant"
              name="dependant"
              value={formData.dependant}
              onChange={handleChange}
              required
            />
            <SelectInput
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
            />
            <SelectInput
              label="Education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              options={data.education}
              required
            />
          </div>
          <div>
            <TextInput
              label="Loan Amount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Loan Duration"
              name="loanDuration"
              value={formData.loanDuration}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Applicant Income"
              name="applicantIncome"
              value={formData.applicantIncome}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Coapplicant Income"
              name="coApplicantIncome"
              value={formData.coApplicantIncome}
              onChange={handleChange}
              required
            />
            <SelectInput
              label="Previous Loan Perfomance"
              name="previousLoanPerfomance"
              value={formData.previousLoanPerfomance}
              onChange={handleChange}
              options={data.previousLoanPerfomance}
              required
            />
          </div>
        </main>
        <SubmitButton name="Submit" isSubmitting={false} />
      </form>
    </section>
  );
}
