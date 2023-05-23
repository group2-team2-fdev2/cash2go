import { Outlet } from "react-router-dom";

export default function LogInLayout() {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
