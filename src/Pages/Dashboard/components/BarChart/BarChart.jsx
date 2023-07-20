import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Legend);
// import { BsArrowRight } from "react-icons/bs";
import { getMonthsBackwards } from "./MonthsBackwards";
import PropTypes from "prop-types";

export default function BarChart({ title, score }) {
  const numMonths = 6;
  const monthsBackwards = getMonthsBackwards(numMonths);

  const data = {
    labels: monthsBackwards,
    datasets: [
      {
        label: "Short Term",
        data: [0, 0, 0, 0, 0, 0],
        borderWidth: 0,
        barThickness: 40,
        backgroundColor: "#E6E9EC",
      },
      {
        label: "Long Term",
        data: [0, 0, 0, 0, 0, 0],
        borderWidth: 0,
        barThickness: 40,
        backgroundColor: "#454E5C",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          boxWidth: 8,
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        grid: {
          display: false,
        },
        ticks: {
          values: [20, 40, 80, 100],
        },
        stepSize: 20,
        max: 100,
        min: 0,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="BarChart-wrapper">
      <header className="BarChart-heading">
        <div className="BarChart-title">{title}</div>
        {/* <div className="BarChart-model">Subtitle</div> */}
      </header>
      <main className="BarChart-dataWrapper">
        <div className="BarChart-LoanWrapper">
          <p className="BarChart-LoanRequest">Loan Request</p>
          <p className="BarChart-LoanAmount">{`N ${score}`}</p>
        </div>
        <Bar
          style={{
            width: "20%",
            height: "20%",
            paddingTop: "16px",
          }}
          data={data}
          options={options}
        />
      </main>
      {/* <footer className="BarChart-footer">
        <div className="BarChart-callToAction">Change Model</div>
        <div className="BarChart-navigationWrapper">
          <div className="BarChart-navigationLabel">More</div>
          <BsArrowRight className="BarChart-navigationIcon" />
        </div>
      </footer> */}
    </section>
  );
}

BarChart.propTypes = {
  title: PropTypes.string,
  score: PropTypes.string,
};
