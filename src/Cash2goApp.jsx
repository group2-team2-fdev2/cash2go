import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
// page
import LogIn from "./Pages/Auth/LogIn/LogIn";
import EmailAndCompanyIDAuth from "./Pages/Auth/SignUp/EmailAndCompanyIDAuth/EmailAndCompanyIDAuth";
import OTPAuth from "./Pages/Auth/SignUp/OTPAuth/OTPAuth";
import PasswordAuth from "./Pages/Auth/SignUp/PasswordAuth/PasswordAuth";
import SecurityQuestionAuth from "./Pages/Auth/SignUp/SecurityQuestion/SecurityQuestionAuth";
import EmailRequest from "./Pages/Auth/ForgotPassword/EmailRequest/EmailRequest";
import SecurityQuestion from "./Pages/Auth/ForgotPassword/SecurityQuestionReset/SecurityQuestion";
import UpdatePassword from "./Pages/Auth/ForgotPassword/NewPassword/UpdatePassword";
// Dashboard
import Dashboard from "./Pages/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LogIn />} />
      <Route path="signup" element={<EmailAndCompanyIDAuth />} />
      <Route path="otp-auth" element={<OTPAuth />} />
      <Route path="password-auth" element={<PasswordAuth />} />
      <Route path="security-question-auth" element={<SecurityQuestionAuth />} />
      <Route path="forgot-password" element={<EmailRequest />} />
      <Route path="security-question" element={<SecurityQuestion />} />
      <Route path="update-password/:token" element={<UpdatePassword />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

function Cash2goApp() {
  return <RouterProvider router={router} />;
}

export default Cash2goApp;
