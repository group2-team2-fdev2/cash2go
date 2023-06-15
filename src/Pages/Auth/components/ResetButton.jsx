// library
import PropTypes from "prop-types";
// component
import LoadingGif from "./LoadingGif";

export default function ResetButton( { isSubmitting } ) {
  return (
    <button type="submit" className="Auth-button-wrapper">
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="Auth-button-text">Reset</span>
        </>
      )}
    </button>
  );
}

ResetButton.propTypes = {
  isSubmitting: PropTypes.bool,
};
