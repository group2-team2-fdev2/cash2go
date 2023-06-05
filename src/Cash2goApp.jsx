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
      <Route path="dashboard" element={<Dashboard />} />
      
    </Route>
  )
);

function Cash2goApp() {
  return <RouterProvider router={router} />;
}

export default Cash2goApp;
