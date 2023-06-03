// library
import PropTypes from "prop-types";
// component
import Cash2goLogo from "./Cash2goLogo";
import Step4 from "./Step4";

export default function LeftSignUpLayout4({ isCompleted }) {
  return (
    <div className="background">
      <div className="alt cash2go-wrapper">
        <Cash2goLogo />
      </div>
      <Step4 isCompleted={isCompleted} />
    </div>
  );
}

LeftSignUpLayout4.propTypes = {
  isCompleted: PropTypes.bool,
};
