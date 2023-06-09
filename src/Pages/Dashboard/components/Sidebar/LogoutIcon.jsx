import { Link } from "react-router-dom";

export default function LogoutIcon() {
  return (
    <div className="Sidebar">
      <Link style={{"color": "currentColor"}} to="/">
        <div className="sidebar-icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="sidebar-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            />
          </svg>
          <p className="sidebar-navigation">LOG OUT</p>
        </div>
      </Link>
    </div>
  );
}
