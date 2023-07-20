import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./BreadCrumbs.css";

export default function BreadCrumbs() {
  const location = useLocation();
  const navigate = useNavigate();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      const words = crumb.split("-");
      const capitalizedCrumb = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return (
        <div className="crumb" key={index}>
          <Link to={currentLink}>{capitalizedCrumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadCrumbs_wrapper">
      <div className="breadCrumbs">{crumbs}</div>
      <div className="breadCrumbs_previousLink" onClick={() => navigate(-1)}>
        <BsArrowLeft /> <span>Back</span>
      </div>
    </div>
  );
}
