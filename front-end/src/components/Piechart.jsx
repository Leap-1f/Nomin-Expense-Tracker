import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ pieData }) {
  return (
    <div>
      <Doughnut data={pieData}></Doughnut>
    </div>
  );
}
