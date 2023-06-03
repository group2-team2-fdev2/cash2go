// library
import PropTypes from "prop-types";
// component
import ArrowRight from "./ArrowRight";
import LoadingGif from "./LoadingGif";

export default function LoginButton({ isSubmitting }) {
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

LoginButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
