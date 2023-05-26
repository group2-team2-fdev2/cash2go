// libraries
import { Outlet } from "react-router-dom";
// styles
import "../../styles/Layouts/AuthLayout.css"

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  )
}
