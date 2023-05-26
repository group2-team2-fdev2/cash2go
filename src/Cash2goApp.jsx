import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layouts
import AuthLayout from "./layouts/Auth/AuthLayout";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
// pages
import LogIn from "./Pages/Auth/LogIn";
import EmailAndCompanyIDAuth from "./Pages/Auth/SignUp/EmailAndCompanyIDAuth";
import OTPAuth from "./Pages/Auth/SignUp/OTPAuth";
import PasswordAuth from "./Pages/Auth/SignUp/PasswordAuth";
import SecurityQuestionAuth from "./Pages/Auth/SignUp/SecurityQuestionAuth";
import EmailRequest from "./Pages/Auth/ForgotPassword/EmailRequest";
import SecurityQuestion from "./Pages/Auth/ForgotPassword/SecurityQuestion";
import NewPassword from "./Pages/Auth/ForgotPassword/NewPassword";
// Dashboard
import Dashboard from "./Pages/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<LogIn />} />
      <Route path="sign-up" element={<EmailAndCompanyIDAuth />} />
      <Route path="otp-auth" element={<OTPAuth />} />
      <Route path="password-auth" element={<PasswordAuth />} />
      <Route path="security-question-auth" element={<SecurityQuestionAuth />} />
      <Route path="forgot-password" element={<EmailRequest />} />
      <Route path="security-question-auth" element={<SecurityQuestion />} />
      <Route path="new-password-auth" element={<NewPassword />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Route>
  )
);

function Cash2goApp() {
  return <RouterProvider router={router} />;
}

export default Cash2goApp;
