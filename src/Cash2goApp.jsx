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
import SecurityQuestion from "./Pages/Auth/ForgotPassword/SecurityQuestion/SecurityQuestion";
import NewPassword from "./Pages/Auth/ForgotPassword/NewPassword/NewPassword";

// Main Page
import Main from "./Pages/Main/Main";

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
      <Route path="new-password" element={<NewPassword />} />
      <Route path="dashboard" element={<Main />} />
    </Route>
  )
);

function Cash2goApp() {
  return <RouterProvider router={router} />;
}

export default Cash2goApp;
