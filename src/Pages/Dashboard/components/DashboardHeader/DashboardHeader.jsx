// library
import PropTypes from "prop-types";
// component
import Button from "./Button";
import { Link } from "react-router-dom";

export default function DashboardHeader({
  title,
  subTitle,
  firstLink,
  secondLink,
  isTrue,
  firstButtonTitle,
  secondButtonTitle,
  borderBottom,
  paddingBottom,
}) {
  const containerStyle = {
    borderBottom: borderBottom,
    paddingBottom: paddingBottom,
  };

  return (
    <div style={containerStyle} className="dashboardHeader-wrapper">
      <div className="left-dashboardHeader">
        <p className="dashboardHeader-title">{title}</p>
        <p className="dashboardHeader-subTitle">{subTitle}</p>
      </div>
      {isTrue ? null : (
        <div className="right-dashboardHeader">
          <Link to={firstLink}>
            <Button
              title={firstButtonTitle}
              backgroundColor="#E6E9EC"
              color="#5f6d7e"
            />
          </Link>
          <Link to={secondLink}>
            <Button
              title={secondButtonTitle}
              backgroundColor="#FF6F5A"
              color="#F8F9FB"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  firstLink: PropTypes.string,
  secondLink: PropTypes.string,
  isTrue: PropTypes.bool,
  firstButtonTitle: PropTypes.string,
  secondButtonTitle: PropTypes.string,
  borderBottom: PropTypes.string,
  paddingBottom: PropTypes.string,
};
