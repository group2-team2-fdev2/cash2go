import PropTypes from "prop-types";
import loadingGif from "../assets/loadingGif.svg";

export default function Button({ name, isSubmitting }) {
  return (
    <button type="submit" className="NewApplicantForm-button-wrapper">
      {isSubmitting ? (
        <>
          <LoadingGif />
        </>
      ) : (
        <>
          <span className="NewApplicantForm-button-text">{name}</span>
          {name === "Next" ? <ArrowRight /> : null}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  isSubmitting: PropTypes.bool,
};

export function LoadingGif() {
  return (
    <>
      <img src={loadingGif} alt="loading" className="Auth-loading-gif" />
    </>
  );
}

export function ArrowRight() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="Auth-arrow-right"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </>
  );
}
