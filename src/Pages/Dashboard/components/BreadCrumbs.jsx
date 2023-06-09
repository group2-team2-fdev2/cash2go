import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();

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

  return <div className="breadCrumbs">{crumbs}</div>;
}
