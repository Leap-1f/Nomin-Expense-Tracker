import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export function BarChart({ chartDataTest }) {
  return (
    <div>
      <Bar data={chartDataTest}></Bar>
    </div>
  );
}
