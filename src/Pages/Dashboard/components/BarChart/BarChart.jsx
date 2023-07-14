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
import PropTypes from "prop-types";

export default function BarChart({ title, score }) {
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Short Term",
        data: [25, 50, 75],
        borderWidth: 0,
        barThickness: 40,
        backgroundColor: "#E6E9EC",
      },
      {
        label: "Long Term",
        data: [50, 25, 100],
        borderWidth: 0,
        barThickness: 40,
        backgroundColor: "#454e5c",
      },
    ],
  };

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
        grid: {
          display: false,
        },
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
  title: PropTypes.number,
  score: PropTypes.string,
};
