// library
import PropTypes from "prop-types";
// component
import Cash2goLogo2 from "./Cash2goLogo2";
import Step4 from "./Step4";

export default function LeftSignUpLayout4({ isCompleted }) {
  return (
    <div className="Auth-background">
      <Cash2goLogo2 />
      <Step4 isCompleted={isCompleted} />
    </div>
  );
}

LeftSignUpLayout4.propTypes = {
  isCompleted: PropTypes.bool,
};
