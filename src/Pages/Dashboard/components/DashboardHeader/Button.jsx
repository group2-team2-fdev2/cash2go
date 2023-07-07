// library
import PropTypes from "prop-types";


export default function Button({ title, backgroundColor, color, width , onClick }) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    width: width,
  };

  return (
    <>
      <button style={buttonStyle} className="dashboardHeader-button" onClick={() =>onClick()} >
        {title}
      </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
    
  }


