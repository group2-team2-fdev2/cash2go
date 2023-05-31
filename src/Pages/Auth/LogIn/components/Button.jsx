// library
import PropTypes from "prop-types";
// component
import ArrowRight from "./ArrowRight";
import SubmitIcon from "./SubmitIcon";


export default function Button({ isSubmitting }) {
  return (
    <button type="submit" className="button-wrapper">
      {isSubmitting ? (
        <><SubmitIcon /></>
      ) : (
        <>
          <span className="button-text">Log in</span>
          <ArrowRight />
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
