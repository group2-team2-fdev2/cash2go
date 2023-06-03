// library
import PropTypes from "prop-types";
// component
import ArrowRight from "./ArrowRight";
import LoadingGif from "./LoadingGif";

export default function SignupButton({ isSubmitting }) {
  return (
    <button type="submit" className="button-wrapper">
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="button-text">Sign Up</span>
          <ArrowRight />
        </>
      )}
    </button>
  );
}

SignupButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
