// library
import { FiThumbsUp } from "react-icons/fi";
import { BiCheckCircle, BiTrendingUp } from "react-icons/bi";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { BsInfoCircle } from "react-icons/bs";
// library
import PropTypes from "prop-types";

export default function ApplicationsSummary({
  title,
  score,
  description,
  status,
  backgroundColor,
  color,
}) {
  const statusStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <div className="applicationsOverview-Contentwrapper">
      <div className="applicationsOverview-heading">
        <div className="applicationsOverview-title">{title}</div>
        <ApplicationsOverviewIcon title={title} />
      </div>
      <div className="applicationsOverview-score">{score}</div>
      <div className="applicationsOverview-footer">
        <p className="applicationsOverview-description">{description}</p>
        <div
          style={statusStyle}
          className="applicationsOverview-status-wrapper"
        >
          <ApplicationsOverviewStatusIcon status={status} />
          <p className="applicationsOverview-status">{status}</p>
        </div>
      </div>
    </div>
  );
}

ApplicationsSummary.propTypes = {
  title: PropTypes.string,
  score: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export function ApplicationsOverviewIcon({ title }) {
  let iconComponent = null;

  if (title == "Loan Request") {
    iconComponent = (
      <FiThumbsUp className="applicationsOverview-icon" />
    );
  } else if (title == "Credit Utilization") {
    iconComponent = (
      <BiTrendingUp className="applicationsOverview-icon" />
    );
  } else if (title == "Outstanding Debt") {
    iconComponent = (
      <HiOutlineBarsArrowDown className="applicationsOverview-icon" />
    );
  }

  return (
    <div className="applicationsOverview-iconWrapper">{iconComponent}</div>
  );
}

ApplicationsOverviewIcon.propTypes = {
  title: PropTypes.string,
};

export function ApplicationsOverviewStatusIcon({ status }) {
  let iconComponent = null;

  if (status == "Approved" || status == "Excellent") {
    iconComponent = (
      <BiCheckCircle className="applicationsOverview-statusIcon" />
    );
  } else if (status == "Pending") {
    iconComponent = (
      <BsInfoCircle className="applicationsOverview-statusIcon" />
    );
  }  else if (status == "Rejected") {
    iconComponent = (
      <BsInfoCircle className="applicationsOverview-statusIcon" />
    );
  }

  return <div>{iconComponent}</div>;
}

ApplicationsOverviewStatusIcon.propTypes = {
  status: PropTypes.string,
};
