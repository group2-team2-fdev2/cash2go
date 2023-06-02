// library
import PropTypes from "prop-types";
// component
import ArrowRight from "./ArrowRight";
import LoadingGif from "./LoadingGif";

export default function Button({ isSubmitting }) {
  return (
    <button type="submit" className="button-wrapper" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
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
