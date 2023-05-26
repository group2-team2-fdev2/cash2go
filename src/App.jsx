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

// pages
import LogIn from "./Pages/Auth/LogIn/LogIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LogInLayout />}>
      <Route index element={<LogIn />} />
      <Route path="sign-up" element={<SignUpLayout />}>
        <Route index element={<SignUp />} />
      </Route>
      

      <Route path="dashboard" element={<DashboardLayout />} >
        <Route index element={<Dashboard />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
