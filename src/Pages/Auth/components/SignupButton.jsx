// library
import PropTypes from "prop-types";
// component
// import ArrowRight from "./ArrowRight";
import LoadingGif from "./LoadingGif";

export default function SignupButton({ isSubmitting }) {
  return (
    <button type="submit" className="Auth-button-wrapper">
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="Auth-button-text">Sign Up</span>
          {/* <ArrowRight /> */}
        </>
      )}
    </button>
  );
}

SignupButton.propTypes = {
  isSubmitting: PropTypes.bool,
};
