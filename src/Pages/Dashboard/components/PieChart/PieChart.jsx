// library
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement);
import { BiCheckCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
// import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";

export default function PieChart({
  creditScore,
  status,
  backgroundColor,
  color,
}) {
  const pieChartData = creditScore / 720;
  const pieChartDataRemainder = 1 - pieChartData;
  const statusStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };
  const data = {
    datasets: [
      {
        data: [pieChartData, pieChartDataRemainder],
        borderWidth: 0,
        backgroundColor: [
          status === "Approved" ? "#169872" : status === "Pending" ? "#C0F5F9" : "#FD3D39",
          "#E6E9EC",
        ],
      },
    ],
  };

  const options = {
    cutout: "65%",
  };

  return (
    <section className="PieChart-wrapper">
      <header className="PieChart-heading">
        <div className="PieChart-title">Average Credit Score</div>
        {/* <div className="PieChart-model">FICO Model</div> */}
      </header>
      <main className="PieChart-dataWrapper">
        <Doughnut
          style={{
            width: "20%",
            height: "20%",
            padding: "16px",
          }}
          data={data}
          options={options}
        />
        <div className="PieChart-performanceWrapper">
          <p className="PieChart-performanceRange">{creditScore}</p>
          <div
            style={statusStyle}
            className="PieChart-performanceStatusWrapper"
          >
            <PieChartPerformanceStatusIcon status={status} />
            <p className="PieChart-performanceStatus">{status}</p>
          </div>
        </div>
      </main>
      {/* <footer className="PieChart-footer">
        <div className="PieChart-callToAction">Change Model</div>
        <div className="PieChart-navigationWrapper">
          <div className="PieChart-navigationLabel">More</div>
          <BsArrowRight className="PieChart-navigationIcon" />
        </div>
      </footer> */}
    </section>
  );
}

PieChart.propTypes = {
  creditScore: PropTypes.number,
  status: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export function PieChartPerformanceStatusIcon({ status }) {
  let iconComponent = null;

  if (status == "Approved" || status == "Excellent") {
    iconComponent = (
      <BiCheckCircle className="applicationsOverview-statusIcon" />
    );
  } else if (status == "Pending") {
    iconComponent = (
      <BsInfoCircle className="applicationsOverview-statusIcon" />
    );
  } else if (status == "Rejected") {
    iconComponent = <GiCancel className="applicationsOverview-statusIcon" />;
  }

  return <div>{iconComponent}</div>;
}

PieChartPerformanceStatusIcon.propTypes = {
  status: PropTypes.string,
};
