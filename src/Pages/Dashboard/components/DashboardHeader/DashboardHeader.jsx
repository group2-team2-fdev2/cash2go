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
  link,
  isNoButton,
  isOneButton,
  isRegularButton,
  firstButtonTitle,
  secondButtonTitle,
  ButtonTitle,
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
      {isNoButton ? null : isOneButton ? (
        <div className="right-dashboardHeader">
          <Link to={link}>
            <Button
              title={ButtonTitle}
              backgroundColor="#FF6F5A"
              color="#F8F9FB"
              width="144px"
            />
          </Link>
        </div>
      ) : isRegularButton ? (
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
      ) : (
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
              width="144px"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.node,
  firstLink: PropTypes.string,
  secondLink: PropTypes.string,
  isNoButton: PropTypes.bool,
  isOneButton: PropTypes.bool,
  isRegularButton: PropTypes.bool,
  firstButtonTitle: PropTypes.string,
  secondButtonTitle: PropTypes.string,
  ButtonTitle: PropTypes.string,
  link: PropTypes.string,
  borderBottom: PropTypes.string,
  paddingBottom: PropTypes.string,
};
