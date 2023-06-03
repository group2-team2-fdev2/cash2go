// library
import PropTypes from "prop-types";
// component
import LoadingGif from "./LoadingGif";

export default function ResetButton( { isSubmitting } ) {
  return (
    <button type="submit" className="button-wrapper">
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="button-text">Reset</span>
        </>
      )}
    </button>
  );
}

ResetButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
