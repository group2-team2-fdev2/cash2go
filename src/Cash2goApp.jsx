import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
// page
import LoginAuth from "./Pages/Auth/LogIn/LoginAuth";
import EmailAndCompanyIDAuth from "./Pages/Auth/SignUp/EmailAndCompanyID/EmailAndCompanyIDAuth";
import OTPAuth from "./Pages/Auth/SignUp/OTP/OTPAuth";
import PasswordAuth from "./Pages/Auth/SignUp/Password/PasswordAuth";
import SecurityQuestionAuth from "./Pages/Auth/SignUp/SecurityQuestion/SecurityQuestionAuth";
import EmailRequest1 from "./Pages/Auth/ForgotPassword/EmailRequest/EmailRequest1";
import SecurityQuestion1 from "./Pages/Auth/ForgotPassword/SecurityQuestion/SecurityQuestion1";
import UpdatePassword from "./Pages/Auth/ForgotPassword/UpdatePassword/UpdatePassword";
// Dashboard
import Dashboard from "./Pages/Dashboard/Dashboard";
// import ApplicantOverview from "./Pages/Dashboard/ApplicantDetails/ApplicantOverview";
// import ApplicantReview from "./Pages/Dashboard/ApplicantDetails/ApplicantReview";
// import ApplicantInfo, {
//   ApplicantBioLoader,
// } from "./Pages/Dashboard/ApplicantDetails/ApplicantInfo";
import Applications from "./Pages/Dashboard/Applications/Applications";
import Notification from "./Pages/Dashboard/Notification/Notification";
import Messages from "./Pages/Dashboard/Messages/Messages";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Analytics from "./Pages/Dashboard/Analytics/Analytics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LoginAuth />} />
      <Route
        path="email-and-companyID-auth"
        element={<EmailAndCompanyIDAuth />}
      />
      <Route path="otp-auth" element={<OTPAuth />} />
      <Route path="password-auth" element={<PasswordAuth />} />
      <Route path="security-question-auth" element={<SecurityQuestionAuth />} />
      <Route path="email-request" element={<EmailRequest1 />} />
      <Route path="security-question" element={<SecurityQuestion1 />} />
      <Route path="update-password/:token" element={<UpdatePassword />} />
      <Route path="dashboard">
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="applications">
        <Route index element={<Applications />} />
      </Route>
      <Route path="analytics">
        <Route index element={<Analytics />} />
        {/* <Route index element={<ApplicantOverview />} />
        <Route path="applicant-review" element={<ApplicantReview />} />
        <Route
          path="info"
          element={<ApplicantInfo />}
          loader={ApplicantBioLoader}
        /> */}
      </Route>
      <Route path="notification" element={<Notification />} />
      <Route path="messages" element={<Messages />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

function Cash2goApp() {
  return <RouterProvider router={router} />;
}

export default Cash2goApp;
