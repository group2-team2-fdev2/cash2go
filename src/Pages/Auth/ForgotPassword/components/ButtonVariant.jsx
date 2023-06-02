// library
import PropTypes from "prop-types";
// component
import LoadingGif from "./LoadingGif";

export default function ButtonVariant( { isSubmitting } ) {
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

ButtonVariant.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};
