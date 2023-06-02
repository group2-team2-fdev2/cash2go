// library
import PropTypes from "prop-types";
// component
import SubmitIcon from "./SubmitIcon";
import ArrowRight from "./ArrowRight";

export default function Button({ isSubmitting }) {
  return (
    <button type="submit" className="button-wrapper">
      {isSubmitting ? (
        <>
          <SubmitIcon />
        </>
      ) : (
        <>
          <span className="button-text">Next</span>
          <ArrowRight />
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
