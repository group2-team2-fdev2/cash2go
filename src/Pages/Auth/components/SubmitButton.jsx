// library
import PropTypes from "prop-types";
// component
import LoadingGif from "./LoadingGif";

export default function SubmitButton({ isSubmitting }) {
  return (
    <button type="submit" className="Auth-button-wrapper" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="Auth-button-text">Submit</span>
        </>
      )}
    </button>
  );
}

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool,
};
