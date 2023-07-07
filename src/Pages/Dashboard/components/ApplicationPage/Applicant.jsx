
import PropTypes from "prop-types";

const Applicant = (props) => {
  return (
       <div>
          <p className='Application-name'>{props.name}</p>
          <p>ID-20239078</p>
        </div>
  )
}
Applicant.propTypes = {
  name: PropTypes.string,
};

export default Applicant
