// library
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement);
import { BiCheckCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";

export default function PieChart() {
  const data = {
    datasets: [
      {
        data: [0.8, 0.2],
        borderWidth: 0,
        backgroundColor: ["#169872", "#E6E9EC"],
      },
    ],
  };

  const options = {
    cutout: "65%",
  };

  const statusStyle = {
    backgroundColor: "#169872",
    color: "#F8F9FB",
  };

  return (
    <section className="PieChart-wrapper">
      <header className="PieChart-heading">
        <div className="PieChart-title">Credit Score</div>
        <div className="PieChart-model">FICO Model</div>
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
          <p className="PieChart-performanceRange">(720 - 850)</p>
          <div style={statusStyle} className="PieChart-performanceStatusWrapper">
            <PieChartPerformanceStatusIcon status="Excellent" />
            <p className="PieChart-performanceStatus">Excellent</p>
          </div>
        </div>
      </main>
      <footer className="PieChart-footer">
        <div className="PieChart-callToAction">Change Model</div>
        <div className="PieChart-navigationWrapper">
          <div className="PieChart-navigationLabel">More</div>
          <BsArrowRight className="PieChart-navigationIcon" />
        </div>
      </footer>
    </section>
  );
}

export function PieChartPerformanceStatusIcon({ status }) {
  let iconComponent = null;

  if (status == "Excellent") {
    iconComponent = (
      <BiCheckCircle className="applicationsOverview-statusIcon" />
    );
  }

  return <div>{iconComponent}</div>;
}

PieChartPerformanceStatusIcon.propTypes = {
  status: PropTypes.string,
};
