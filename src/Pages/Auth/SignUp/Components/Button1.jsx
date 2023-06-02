// library
import PropTypes from "prop-types";
// component
import LoadingGif from "./LoadingGif";

export default function Button1({ isSubmitting }) {
  return (
    <button type="submit" className="button-wrapper" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="button-text">Submit</span>
        </>
      )}
    </button>
  );
}

Button1.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
