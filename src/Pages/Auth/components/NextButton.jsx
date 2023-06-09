// library
import PropTypes from "prop-types";
// component
import ArrowRight from "./ArrowRight";
import LoadingGif from "./LoadingGif";

export default function NextButton({ isSubmitting }) {
  return (
    <button type="submit" className="Auth-button-wrapper">
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="Auth-button-text">Next</span>
          <ArrowRight />
        </>
      )}
    </button>
  );
}

NextButton.propTypes = {
  isSubmitting: PropTypes.bool,
};
