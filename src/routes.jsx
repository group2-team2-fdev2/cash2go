import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Auth from './Pages/Auth'
import LoginAuth from "./Pages/Auth/LogIn/LoginAuth";
import EmailAndCompanyIDAuth from "./Pages/Auth/SignUp/EmailAndCompanyID/EmailAndCompanyIDAuth";
import OTPAuth from "./Pages/Auth/SignUp/OTP/OTPAuth";
import PasswordAuth from "./Pages/Auth/SignUp/Password/PasswordAuth";
import SecurityQuestionAuth from "./Pages/Auth/SignUp/SecurityQuestion/SecurityQuestionAuth";
import EmailRequest from "./Pages/Auth/ForgotPassword/EmailRequest/EmailRequest";
import SecurityQuestion from "./Pages/Auth/ForgotPassword/SecurityQuestion/SecurityQuestion";
import UpdatePassword from "./Pages/Auth/ForgotPassword/UpdatePassword/UpdatePassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ApplicantOverview from "./Pages/Dashboard/ApplicantDetails/ApplicantOverview";
import ApplicantReview from "./Pages/Dashboard/ApplicantDetails/ApplicantReview";
import ApplicantInfo, {
  // ApplicantBioLoader,
} from "./Pages/Dashboard/ApplicantDetails/ApplicantInfo";
import Applications from "./Pages/Dashboard/Applications/Applications";
import Notification from "./Pages/Dashboard/Notification/Notification";
import Messages from "./Pages/Dashboard/Messages/Messages";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Analytics from "./Pages/Dashboard/Analytics/Analytics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Auth />}>
      <Route index element={<LoginAuth />} />
      <Route
        path="email-and-companyID-auth"
        element={<EmailAndCompanyIDAuth />}
      />
      <Route path="otp-auth" element={<OTPAuth />} />
      <Route path="password-auth" element={<PasswordAuth />} />
      <Route path="security-question-auth" element={<SecurityQuestionAuth />} />
      <Route path="email-request" element={<EmailRequest />} />
      <Route path="security-question" element={<SecurityQuestion />} />
      <Route path="update-password/:token" element={<UpdatePassword />} />
      <Route path="dashboard">
        <Route index element={<Dashboard />} />
        <Route path="applicant-overview">
          <Route index element={<ApplicantOverview />} />
          <Route path="applicant-review/*" element={<ApplicantReview />} />
          <Route
            path="info"
            element={<ApplicantInfo />}
            // loader={ApplicantBioLoader}
          />
        </Route>
      </Route>
      <Route path="applications/*" element={<Applications />} />
      <Route path="analytics">
        <Route index element={<Analytics />} />
      </Route>
      <Route path="notification" element={<Notification />} />
      <Route path="messages/*" element={<Messages />} />
      <Route path="settings/*" element={<Settings />} />
    </Route>
  )
);

export default router;
