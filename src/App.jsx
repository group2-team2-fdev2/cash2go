import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layouts
import LogInLayout from "./layouts/Auth/LogInLayout";
import SignUpLayout from "./layouts/Auth/SignUpLayout";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import EmailRequestLayout from "./layouts/Auth/EmailRequestLayout";
import SecurityQuestionLayout from "./layouts/Auth/SecurityQuestionLayout";
// pages
import LogIn from "./Pages/Auth/LogIn/LogIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import EmailRequest from "./Pages/Auth/LogIn/EmailRequest";
import SecurityQuestion from "./Pages/Auth/LogIn/SecurityQuestion";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LogInLayout />}>
      <Route index element={<LogIn />} />
      <Route path="sign-up" element={<SignUpLayout />}>
        <Route index element={<SignUp />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="forgot-password" element={<EmailRequestLayout />}>
        <Route index element={<EmailRequest />} />
      </Route>
      <Route path="securityquestion" element={<SecurityQuestionLayout />}>
        <Route index element={<SecurityQuestion />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
