import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
import PropTypes from "prop-types";

export default function LineChart({ title, duration, data }) {
  // const data = {
  //   labels: ["January", "February", "March", "April", "May", "June"],
  //   datasets: [
  //     {
  //       label: "Cashflow",
  //       data: [50, 25, 75, 90, 25, 75],
  //       backgroundColor: "#169872",
  //       borderColor: "#169872",
  //       borderWidth: 2,
  //       pointBorderColor: "#169872",
  //       tension: 0.3,
  //     },
  //   ],
  // };

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 10,
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="LineChart-wrapper">
      <header className="LineChart-heading">
        <div className="LineChart-title">{title}</div>
        <div className="LineChart-subTitle">{duration}</div>
      </header>
      <main className="LineChart-dataWrapper">
        <div
          style={{
            width: "70%",
            height: "30%",
            paddingTop: "16px",
          }}
        >
          <Line data={data} options={options} />
        </div>
      </main>
      {/* <footer className="LineChart-footer">
        <div className="LineChart-callToAction">Change Model</div>
        <div className="LineChart-navigationWrapper">
          <div className="LineChart-navigationLabel">More</div>
          <BsArrowRight className="LineChart-navigationIcon" />
        </div>
      </footer> */}
    </section>
  );
}

LineChart.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  data: PropTypes.shape({
    labels: PropTypes.array,
    datasets: PropTypes.array,
  }),
};
