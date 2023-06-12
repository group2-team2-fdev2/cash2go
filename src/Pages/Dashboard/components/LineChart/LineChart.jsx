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

export default function LineChart() {
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Cashflow",
        data: [50, 25, 75],
        backgroundColor: "#169872",
        borderColor: "#169872",
        borderWidth: 2,
        pointBorderColor: "#169872",
        tension: 0.3,
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
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
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
    <section className="LineChart-wrapper">
      <header className="LineChart-heading">
        <div className="LineChart-title">Cashflow</div>
        <div className="LineChart-subTitle">Jan - Mar 2023</div>
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
