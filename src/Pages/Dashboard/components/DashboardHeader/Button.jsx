// library
import PropTypes from "prop-types";

export default function Button({ title, backgroundColor, color, notificationWidth }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    width: notificationWidth,
  };
  return (
    <>
      <button style={buttonStyle} className="dashboardHeader-button">
        {title}
      </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  notificationWidth: PropTypes.string
};
